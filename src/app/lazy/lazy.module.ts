import { NgModule } from '@angular/core';
// Here we import Material modules that we use
import {MdMenuModule} from '@angular/material';
import { CommonModule } from '@angular/common';// This module is necessary in Lazy loading as BrowserModule is loaded on the other module
                                                // and this module have to include the common
import { MaterialModule, MdNativeDateModule, MdButtonModule, MdToolbarModule } from '@angular/material';

import {SortPipe} from 'app/utility/sort.pipe';
import { LazyComponent } from './lazy.component';
import {ModalComponent} from 'app/utility/modal.component';


import { routing } from './lazy.routing';

import 'hammerjs';


@NgModule({
  imports: [routing, CommonModule, MdButtonModule, MdMenuModule, MaterialModule, MdNativeDateModule, MdToolbarModule],
  declarations: [SortPipe, ModalComponent, LazyComponent],
})
export class LazyModule {}
