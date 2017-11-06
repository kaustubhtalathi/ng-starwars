import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { PeopleComponent } from '../people/people.component';
import { PlanetsComponent } from '../planets/planets.component';
import { StarshipsComponent } from '../starships/starships.component';

const appRoutes: Routes = [
    { path: 'people', component: PeopleComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'starships', component: StarshipsComponent },
    { path: '',
      redirectTo: '/people',
      pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}