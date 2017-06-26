import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Base } from 'app/utility/base';

@Component({
    selector: 'airport-details-list',
    template: `
      <small class='production' *ngIf='!isDevMode'>Ryanair Information</small>
      <small class='debug' *ngIf='isDevMode'>{{ me }}</small>

<div class="panel panel-default">       
<table class="table table-sm table-inverse">
  <thead>
    <tr>
      <th>City Code</th>
      <th>Country Code</th>
      <th>Seo Name</th>
      <th>Iata Code</th>
      <th>Coordinates</th>
    </tr>
  </thead>
  <tbody>
 <tr class="cellstyle" *ngFor="let airport of airportList">
  <td class="bg-primary">{{ airport.citycode }}</td>
  <td class="bg-success">{{ airport.countrycode | uppercase }}</td>
  <td class="bg-warning">{{ airport.seoname }}</td>
  <td class="bg-danger">{{ airport.iatacode }}</td>
  <td class="bg-info">Lat:  {{ airport.coordinates.latitude }} Long: {{ airport.coordinates.longitude }}</td>
 </tr>
 </tbody>
</table>
</div>
    `,
    styles: [` .cellstyle {
                           color: white;
    }
    `]
})
export class AirportDetailsListComponent extends Base {
    @Input('airportList') airportList: SelectItem[];

    constructor() {
        super();
    }
}
