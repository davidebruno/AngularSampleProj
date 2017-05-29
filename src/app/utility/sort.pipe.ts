/*
 * Example use:
 * Enter strin array:  <input type='text' value=''>
 * Array of numbers {{ [58,10,32,8,21,53] | sort: 'asc':'number' }}
 * Array of strings {{ ['as', 'value','maybe','strings','are' ,'ordered'] | sort: 'asc'}} 
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'sort',
        pure: false})
export class SortPipe implements PipeTransform {
    transform(value: any[], args: string, type: string): any {
        if (args === 'asc') {
            return ( (type === 'number') ? value.sort((a, b) => a - b) : value.sort() ) ;
        } else if (args === 'desc'){
          return  ( (type === 'number') ? value.sort((a, b) => a - b).reverse() : value.sort().reverse() ) ;
        }
    }
}
