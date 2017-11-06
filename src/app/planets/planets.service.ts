import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { Planets } from './planets';

@Injectable()
export class PlanetsService {
    constructor(private http: Http){}

    getPlanets(): Observable<Planets[]> {
        return this.http.get('https://swapi.co/api/planets')
                .map((res:Response) => res.json());
    }
    
}