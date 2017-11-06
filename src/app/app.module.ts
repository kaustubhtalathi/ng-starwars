import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing/app-routing.module'

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';

import { PeopleService } from './people/people.service';
import { PlanetsService } from './planets/planets.service';
import { StarshipsService } from './starships/starships.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PeopleService, PlanetsService, StarshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
