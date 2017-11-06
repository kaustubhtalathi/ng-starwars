import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PeopleService } from './people.service';
import { People } from './person';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    peopleHeader: string;
    people: People[];

    constructor(private ps: PeopleService){
        this.peopleHeader = 'This is people.';
    }

    loadPeople(){
        // Get all comments
         this.ps.getPeople()
            .subscribe(
                people => this.people = people, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    ngOnInit(){
            // Load people
            this.loadPeople()
    }    
}