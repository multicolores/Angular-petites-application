import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './project-container/heroes/heroes.component';
import { FilmsComponent } from './API/films/films.component';
import { HeroDetailComponent } from './project-container/hero-detail/hero-detail/hero-detail.component';
import {FilmDetailComponent} from './API/film-detail/film-detail.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, data: { animation: 'heroes' }},
  { path: 'films', component: FilmsComponent, data: { animation: 'films' } },
  { path: 'filmdetail/:id', component: FilmDetailComponent },
  { path: 'detail/:id', component: HeroDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }