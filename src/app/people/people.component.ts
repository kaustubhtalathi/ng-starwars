import { Component } from '@angular/core';

@Component({
    selector: 'people',
    templateUrl: './people.html',
    styleUrls: ['./people.css']
})
export class PeopleComponent {
    peopleHeader: string;

    constructor(){
        this.peopleHeader = 'This is people.';
    }
}