import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { Starships } from './starships';

@Injectable()
export class StarshipsService {
    constructor(private http: Http){}

    getStarships(): Observable<Starships[]> {
        return this.http.get('https://swapi.co/api/starships')
                .map((res:Response) => res.json());
    }
    
}