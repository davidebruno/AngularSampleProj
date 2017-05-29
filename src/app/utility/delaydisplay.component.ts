import { Component, Input,  OnInit } from '@angular/core';

@Component({
    selector: 'delaydisplay',
    template: `<div *ngIf="showContent">
                <ng-content></ng-content>
               </div>`
})
export class DelayDisplayComponent implements OnInit{
    showContent = false;
    // Default value of delay
    @Input('millisdelay') milliseconds = 500;

    ngOnInit() {
        setTimeout(() => this.showContent = true, this.milliseconds);
    }
}
