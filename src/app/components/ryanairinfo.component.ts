import { Component, OnInit } from '@angular/core';
import {RyanairAirportsCountriesService} from '../services/ryanair-airportscountries.service';
import {Base} from '../utility/base';
import {ryanair} from '../model/airportscountries.ryanair';
import {Observable} from 'rxjs/Observable';
import {DropdownModule, MultiSelectModule, SelectItem} from 'primeng/primeng';

@Component({
    selector: 'ryanairinfo',
    template: `
      <small class='production' *ngIf='!isDevMode'>Ryanair Information</small>
      <small class='debug' *ngIf='isDevMode'>{{ me }}</small>
      <div [hidden]='!dataAvailable'>
        <tr>
        <div class="panel panel-default reentrant">
          <div >
            <h4 class="first">Countries</h4>

              <div class="btn-group">
                <p-dropdown [options]="countriesSelItem" [(ngModel)]="selectedCountry" [style]="{'width':'150px'}"
                    filter="filter" placeholder="Select a Country">
                </p-dropdown>
                <div class='infocountry' *ngIf='selectedCountry != null'>
                    <div class="panel panel-default">
                      <div class="panel-heading"> {{ selectedCountry.name}} Details</div>
                      <div class="panel-body">
                          <p>Country Code: {{ selectedCountry.code | uppercase }}</p>
                          <p>Currency: {{ selectedCountry.currency }}</p> 
                      </div>
                    </div>
                 </div>
               </div>

            <div class="error" *ngIf="countries?.length <= 0">Connection error retrieving data</div>
            
            <div class="panel panel-default extended">  
             <div class="panel-heading"> Airport Details</div>
            </div>
              <table>
               <tr>
                 <td>
                   <p-dropdown [options]="airportsSelItem" [(ngModel)]="selectedAirport" [style]="{'width':'150px'}"
                          filter="filter" placeholder="Select an Airport">
                   </p-dropdown>
                 </td>
                 <td class="reentrant">
                    <p-multiSelect [options]="airportsSelItem" [(ngModel)]="selectedMultipleAirport" 
                      class="ui-multiselect-items" ui-multiselect-panel defaultLabel="Select Multiple Airports">
                    </p-multiSelect>
                 </td>
                </tr>
              </table>
            <div class='infocountry' *ngIf='(selectedAirport != null) '>
                        <airport-details [airport]=selectedAirport></airport-details>
            </div>
            <div class='infocountry' *ngIf=' (selectedMultipleAirport != null) '>
              <airport-details-list  [airportList]=selectedMultipleAirport></airport-details-list>
            </div>
     </div>
      </div>
      </tr>
      </div>
      
       <!-- airport-details [airportList]=selectedMultipleAirport></airport-details -->

      <!-- <p>Selected Airports: {{selectedMultipleAirport}}</p> -->



    `,
    styles: [`
              .error {color:red;}
              .infocountry { color: #1f89ce; font-size: medium;
                              padding-top: 10px;}
              .reentrant   { padding-left: 18px;}
              .extended {
                margin-button: 5px;
                margin-top:    10px;
              }
              `],
    providers: [RyanairAirportsCountriesService],
})
export class RyanAirInfoComponent extends Base {
   rootObjObs: Observable<ryanair.RootObject>;
   private countries: ryanair.Country[];
   private airports: ryanair.Airport[];
   countriesSelItem: SelectItem[] = [];
   airportsSelItem:  SelectItem[] = [];
   selectedCountry: SelectItem;
   selectedAirport: SelectItem;
   selectedMultipleAirport: SelectItem[];
   dataAvailable = false;
   errorMessage:any;

   constructor(private _ryanairAC: RyanairAirportsCountriesService) {
        super();
        this.getData();
   }

   getData() {
        this.rootObjObs = this._ryanairAC.getAirportsCountries();
        this.rootObjObs.subscribe(
                      (data) => {
                                this.countries = <ryanair.Country[]> data.countries ;
                                this.airports  = <ryanair.Airport[]> data.airports ;
                                this.countries.forEach( element => { this.countriesSelItem
                                                                      .push({label: element.name,
                                                                         value: { name: element.name, code: element.code,
                                                                               currency: element.currency} }) });
                                this.airports.forEach( element => { this.airportsSelItem
                                                                          .push({ label: element.name,
                                                                                value: { name: element.name, seoname: element.seoName,
                                                                                         countrycode: element.countryCode,
                                                                                         citycode: element.cityCode,
                                                                                         iatacode: element.iataCode,
                                                                                         coordinates: element.coordinates}  }); } );
                                this.dataAvailable = true;
                              },
                       (error) => {this.errorMessage = error;},
                       () => {console.log('Completed stream Rest response')}
           );
    }
}
