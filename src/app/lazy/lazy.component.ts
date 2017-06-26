import { Component } from '@angular/core';
import {Base} from 'app/utility/base';
import {SortPipe} from 'app/utility/sort.pipe';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'menu-demo',
  templateUrl: 'lazy.component.html',
  styleUrls: ['lazy.component.css'],
})
export class LazyComponent extends Base{

 selected = '';
  items = [
    {text: 'Home', href: 'home'},
    {text: 'Ryanair Airports Countries', href: 'ryaninfo'},
    {text: 'Currency', href: 'currencyrates'},
    {text: 'Youtube images', href: 'youtubelist'},
    {text: 'Login', href: 'login', disabled: true},
    {text: 'Current lazy page :)', href: 'lazy'},

  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }

}
