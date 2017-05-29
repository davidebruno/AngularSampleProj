import {Component} from '@angular/core';
import {Base} from 'app/utility/base';
import {CurrencyRatesService} from '../services/currencyrates.service';
import {Observable} from 'Rxjs/observable';
import {currencyrates} from '../model/currency-rates';


@Component({
    selector: 'currenciesrates',
    template: `
                <small class='production' *ngIf='!isDevMode'></small>
                <small class='debug' *ngIf='isDevMode'>{{ me }}</small>
                <div class='contsize'>
                    <p class='titlegra'>Date: {{ this.dateStr }}    Base: {{ this.currBase }} </p>
                    <chart type="bar" [data]="dataChartPN"></chart>
                </div>
             `,
    styles: [` .titlegra {  margin-top: 10.5px;
                            margin-bottom: 10.5px;
                            color: blue;
                            font: -webkit-small-control;
                            padding-left: 33px;
                        }
                .contsize {width: 90%; height: 80%;} /* {width: 888px; height: 700px;} */
    `],
    providers: [CurrencyRatesService],
})
export class CurrencyRatesComponent extends Base {
   euBaseCurrRates: Observable<currencyrates.EuBaseCurrRates>;
   private rates: currencyrates.Rates;
   dataAvailable = false;
   errorMessage: string;
   dataChartPN: any = [];
   dataChartPNexamp: any;
   dateStr: string;
   currBase: string;

   constructor(private _currRatesServ: CurrencyRatesService) {
        super();
        this.getData();
         this.dataChartPN = {           labels: [],
                                        datasets: [
                                            {
                                                label: '',
                                                backgroundColor: '',
                                                borderColor: '',
                                                data: []
                                            }]
                                   };
    }

   getData() {
        this.euBaseCurrRates = this._currRatesServ.getCurrenciesRates();
        this.euBaseCurrRates.subscribe(
                      (dataRes) => {
                                this.dateStr = dataRes.date;
                                this.currBase = dataRes.base;
                                this.rates = <currencyrates.Rates> dataRes.rates;
                                // console.log('Logging Keys fo rates: ' + Object.keys(this.rates));
                                let valObj = this.rates;
                                let  objToIter = Object.keys(this.rates);
                                    // ES2016 adds for...of:
                                    let labels = [];
                                    let values = [];
                                    for (const key of Object.keys(objToIter)) {
                                            if (dataRes.rates[objToIter[key]] < 80) {
                                                labels.push(objToIter[key]);
                                                values.push(dataRes.rates[objToIter[key]]);
                                                // console.log(key, objToIter[key],  dataRes.rates[objToIter[key]]);
                                                }
                                    }
                                this.dataChartPN = {
                                       labels: labels,
                                       datasets: [
                                                    {
                                                        label: 'Currencies based on Euro',
                                                        backgroundColor: '#42A5F5',
                                                        borderColor: '#1E88E5',
                                                        data: values }]
                                        };
                                this.dataAvailable = true;
                              },
                       (error) => {this.errorMessage = error;},
                       () => { console.log('Completed stream Rest response'); }
           );
    }
}
