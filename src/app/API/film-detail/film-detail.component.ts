import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  film: Film | undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location,
    ) {}

  getFilm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.filmService.getFilm(id)
    .subscribe(films => this.film = films);
  }

  ngOnInit(): void {
    this.getFilm();
  }

}
