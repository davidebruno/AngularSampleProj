import {Injectable} from '@angular/core';
import { Http, URLSearchParams, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ryanair } from '../model/airportscountries.ryanair';

import { ReplaySubject } from 'rxjs/Rx';

import {Utility} from '../utility/utility';


@Injectable()
export class RyanairAirportsCountriesService {
    urlAirportsCountries = 'https://api.ryanair.com/aggregate/3/common?embedded=airports,countries&market=en-gb';
    errorMessage:string;
    n: number;
    private dataObs$ = new ReplaySubject(1);

    constructor(private _http: Http) { }

   getAirportsCountries(): Observable<ryanair.RootObject> {
      return  this._http.get(this.urlAirportsCountries)
                  .map( (res: Response) => {
                          const rootObj = <ryanair.RootObject> 
                          res.json();
                          return rootObj;
                        } )
                   .catch(Utility.errorHandler);
    }

   getData(forceRefresh?: boolean) {
        // If the Subject was NOT subscribed before OR if forceRefresh is requested 
        if (!this.dataObs$.observers.length || forceRefresh) {
            this._http.get(this.urlAirportsCountries).subscribe(
                data => this.dataObs$.next(data),
                error => {
                    this.dataObs$.error(error);
                    // Recreate the Observable as after Error we cannot emit data anymore
                    this.dataObs$ = new ReplaySubject(1);
                }
            );
        }

        return this.dataObs$;
    }

 private extractData(res: Response) {
    let body = <ryanair.RootObject> res.json();
    return body || { };
  }


    getReposForOrg(org: string) {
        return this.makeRequest(`orgs/${org}/repos`);
    }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${ path }`;
    return this._http.get(url, {search: params})
      .map((res) => res.json());
  }
}
