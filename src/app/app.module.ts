import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import {RyanAirInfoComponent} from './components/ryanairinfo.component';
import {CurrencyRatesComponent} from './components/currency-rates.component';
import {AirportDetailsComponent} from './components/airport-details.component';
import {AirportDetailsListComponent} from './components/airport-details-list.component';
import {LoginComponent} from 'app/components/login.component';
import {YoutubeListComponent} from 'app/components/youtube-list.component';
import {YoutubeComponent} from 'app/components/youtube.component';
import {DelayDisplayComponent} from 'app/utility/delaydisplay.component';

import { routing } from './app.routing';

import {NavBarComponent} from './navbar.component';

import {AutenticationService} from 'app/services/authentication.service';
import {AuthenticationGuard} from 'app/services/authentication-guard.service';


// Adding ng-bootstrap required declaration and place into imports  NgbModule.forRoot()
// Other modules in your application can simply import NgbModule:
// @NgModule({
//   declarations: [OtherComponent, ...],
//   imports: [NgbModule, ...]
// })


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {DropdownModule, MultiSelectModule} from 'primeng/primeng';
// import {ChartModule} from 'primeng/primeng';
import { ChartModule } from 'angular2-chartjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    RyanAirInfoComponent,
    CurrencyRatesComponent,
    AirportDetailsComponent,
    AirportDetailsListComponent,
    NavBarComponent,
    LoginComponent,
    YoutubeComponent,
    YoutubeListComponent,
    DelayDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MultiSelectModule,
    DropdownModule,
    ChartModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthenticationGuard, AutenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
