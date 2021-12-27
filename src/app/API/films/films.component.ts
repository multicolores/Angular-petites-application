import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  getFilms(): void {
    this.filmService.getFilms()
    .subscribe(films => this.films = films);
  }

  ngOnInit(): void {
    this.getFilms();
  }

  selectedFilm(filmid: number): void{
    console.log(filmid);
  }

}
