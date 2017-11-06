import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PlanetsService } from './planets.service';
import { Planets } from './planets';

@Component({
    selector: 'app-planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
    planetsHeader: string;
    planets: Planets[];

    constructor(private ps: PlanetsService){
        this.planetsHeader = 'This is planets.';
    }

    loadPlanets(){
        // Get all comments
         this.ps.getPlanets()
            .subscribe(
                planets => this.planets = planets, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    ngOnInit(){
            // Load Planets
            this.loadPlanets()
    }    
}