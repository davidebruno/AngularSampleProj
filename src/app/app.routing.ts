import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';
import { RyanAirInfoComponent } from './components/ryanairinfo.component';
import {CurrencyRatesComponent} from './components/currency-rates.component';
import {LoginComponent} from 'app/components/login.component';
import {YoutubeListComponent} from 'app/components/youtube-list.component';
import {AuthenticationGuard} from 'app/services/authentication-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: EagerComponent, canActivate: [AuthenticationGuard] },
  { path: 'ryaninfo', component: RyanAirInfoComponent, canActivate: [AuthenticationGuard] },
  { path: 'currencyrates', component: CurrencyRatesComponent, canActivate: [AuthenticationGuard] },
  { path: 'youtubelist', component: YoutubeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);