import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';


export class Utility {


  static errorHandler (error: Response | any) {
        let errorMessage:string;
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        errorMessage = <any>errMsg;
        errMsg = '>>>>>  ERROR FOUND <<<<: status: '  + error.status + '  ' + errMsg;
        console.error(errMsg);
        return Observable.throw(errMsg);
  }

}