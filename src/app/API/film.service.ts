import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Film} from './film'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient,) { }

  private filmUrl = 'https://ghibliapi.herokuapp.com/films';

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmUrl)
    .pipe(
      catchError(this.handleError<Film[]>('getFilm', []))
    );
  }
  // get seulement 1 film en fonction de l'id 
  getFilm(id: string | null): Observable<Film> {
    const url = `${this.filmUrl}/${id}`;
    console.log(url);
    return this.http.get<Film>(url).pipe(
      tap(_ => console.log(`fetched film id=${id}`)),
      catchError(this.handleError<Film>(`getFilm id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  // /* GET films whose name contains search term */
  // searchFilms(term: string): Observable<Film[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Film[]>(`${this.filmUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //       console.log(`found heroes matching "${term}"`) :
  //       console.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Film[]>('searchFilms', []))
  //   );
  // }


}
