import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { StarshipsService } from './starships.service';
import { Starships } from './starships';

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
    starshipsHeader: string;
    starships: Starships[];

    constructor(private ps: StarshipsService){
        this.starshipsHeader = 'This is starships.';
    }

    loadStarships(){
        // Get all comments
         this.ps.getStarships()
            .subscribe(
                starships => this.starships = starships, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    ngOnInit(){
            // Load Starships
            this.loadStarships()
    }    
}