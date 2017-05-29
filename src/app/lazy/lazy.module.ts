import { NgModule } from '@angular/core';
// Here we import Material modules that we use
import {MdMenuModule} from '@angular/material';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

import {SortPipe} from 'app/utility/sort.pipe';
import { LazyComponent } from './lazy.component';
import { routing } from './lazy.routing';


@NgModule({
  imports: [routing, MdMenuModule, MaterialModule, MdNativeDateModule],
  declarations: [SortPipe, LazyComponent]
})
export class LazyModule {}
