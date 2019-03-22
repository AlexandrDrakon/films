import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip, take } from 'rxjs/operators';

import {IFilm} from '../models/film.interface';
import {GetFilms, selectFilmsList} from '../store/films';
import { IAppState } from './../store/app/app.state';

@Injectable({
  providedIn: 'root'
})
export class FilmsListResolver implements Resolve<IFilm[]> {
  constructor(private store: Store<IAppState>) {}

  resolve(): Observable<IFilm[]> {
    this.store.dispatch(new GetFilms(1));

    return this.store.pipe(
      select(selectFilmsList),
      skip(1),
      take(1)
    );
  }
}
