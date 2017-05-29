/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>"
import {Component} from '@angular/core';
export  class Base {
    protected me;
    protected isDevMode: boolean = false;
    protected modeLabel;

    constructor(){
        this.isDevMode = this.checkDevMode();
        this.modeLabel = this.isDevMode ? 'debug mode: ' : '';
        this.me = this.modeLabel + ' ' + this.getCompSelector(this.constructor);
    }


    protected getCompSelector(i_constructor) {

        if (window.location.href.indexOf('localhost') == -1)
            return;
        let annotations = Reflect.getMetadata('annotations', i_constructor);
        if (!annotations)
            return '';
        let componentMetadata = annotations.find(annotation => {
            return (annotation instanceof Component);
        });
        return componentMetadata.selector;
    }

    public checkDevMode(): boolean {
        if (window.location.href.indexOf('localhost') > -1) {
            return true;
        } else {
            return false;
        }
    }
}