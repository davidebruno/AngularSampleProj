import {Injectable} from '@angular/core';
import { Http, URLSearchParams, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Utility} from '../utility/utility';

import { currencyrates } from '../model/currency-rates';

@Injectable()
export class CurrencyRatesService {
    urlLatestEuBaseCurrencyRates = 'http://api.fixer.io/latest';

    constructor(private _http: Http) { }

    getCurrenciesRates(): Observable<currencyrates.EuBaseCurrRates> {
        return  this._http.get(this.urlLatestEuBaseCurrencyRates)
                    .map( (res: Response) => {
                            const rootObj = <currencyrates.EuBaseCurrRates> 
                            res.json();
                            return rootObj;
                            } )
                    .catch(Utility.errorHandler);
        }
}
