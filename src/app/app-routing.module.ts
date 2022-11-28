import { GamesAboutusComponent } from './games-aboutus/games-aboutus.component';
import { OverpassGamesComponent } from './overpass-games/overpass-games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'games',
    pathMatch: 'full'
  },

  {
   path:'games',
   component: OverpassGamesComponent
  },

  {
    path:'about',
    component: GamesAboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
