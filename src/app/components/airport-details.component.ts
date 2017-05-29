import {Component, Input} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { Base } from 'app/utility/base';

@Component({
    selector: 'airport-details',
    template: `
      <small class='production' *ngIf='!isDevMode'>Ryanair Information</small>
      <small class='debug' *ngIf='isDevMode'>{{ me }}</small>
      <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading"> {{ airport.name}} Airport Details</div>
            <div class="panel-body">
                <p>City Code: {{ airport.citycode }}</p> <p>Country Code: {{ airport.countrycode | uppercase }}</p> 
                <p>Seo Name: {{ airport.seoname }}</p> <p>Iata Code: {{ airport.iatacode }}</p>
                <p>  Coordinates:   Lat:  {{ airport.coordinates.latitude }} Long: {{ airport.coordinates.longitude }} </p>   

            </div>
        </div>
    `,
    styles: [` `]
})
export class AirportDetailsComponent extends Base {
   @Input('airport') airport: SelectItem;

   constructor(){
       super();
   }
}
