import {Component} from '@angular/core';
import {ryanair} from '../model/airportscountries.ryanair';

@Component({
    selector: 'view-edit-country',
    template: `
    <div class="error" *ngIf="countries?.length > 0">
    <table class="table table-sm table-inverse">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let country of countries ">     
        <th>
            {{  country.code  }}
          </th>
          <th>
            {{  country.name  }}
          </th>
          <th>
            {{  country.currency  }}
          </th>
        </tr>
      </tbody>
    </table>
 </div>
    `,
})
export class ViewEditCountryComponent {
    country: ryanair.Country;
}