import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { FilmService } from '../film.service';
import { Film } from '../film';


@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  films$!: Observable<Film[]>;
  films: Film[] = [];

  private searchTerms = new Subject<string>();

  constructor(private filmService: FilmService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  getFilms(): void {
    this.filmService.getFilms()
    .subscribe(films => this.films = films);
  }

  ngOnInit(): void {
    // this.films$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.filmService.searchFilms(term)),
    this.getFilms();
  }

}
