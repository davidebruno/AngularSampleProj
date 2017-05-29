import { Component } from '@angular/core';
import {Base} from 'app/utility/base';
import {SortPipe} from 'app/utility/sort.pipe';

@Component({
  selector: 'lazy-sample',
  template: `
            <div class='align-right'>
              <h3>Lazy Loaded Component</h3>
              <h4>Material Components</h4>

            <button md-icon-button [mdMenuTriggerFor]="menu">
              <md-icon class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></md-icon>
            </button>
            <md-menu #menu="mdMenu">
              <button md-menu-item>
                <md-icon class="glyphicon glyphicon-film"></md-icon>
                <span>Films</span>
              </button>
              <button md-menu-item>
                <md-icon class="glyphicon glyphicon-headphones"></md-icon>
                <span>Music</span>
              </button>
              <button md-menu-item>
                <md-icon class="glyphicon glyphicon-picture"></md-icon>
                <span>Photos</span>
              </button>
            </md-menu>
            </div>
             `,
             styles: [`
                      .align-right { padding-left: 18px;}
             `]
})
export class LazyComponent extends Base{

  constructor(){
    super();
  }
}
