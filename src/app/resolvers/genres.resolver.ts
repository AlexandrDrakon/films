import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, filter } from 'rxjs/operators';

import { IGenre } from '../models/genre.interface';
import { IAppState } from '../store/app';
import { GetGenres, selectGenresList } from '../store/genres';

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IGenre[]> {
  constructor(private store: Store<IAppState>) {}

  resolve(): Observable<IGenre[]> {
    this.initGenres();
    return this.waitForGenresToLoad();
  }

  initGenres() {
    this.store
      .pipe(take(1))
      .subscribe(store => {
        if (!store.genres.genres) {
          return this.store.dispatch(new GetGenres());
        }
      });
  }

  waitForGenresToLoad(): Observable<IGenre[]> {
    return this.store.pipe(
      select(selectGenresList),
      filter(genres => !!genres),
      take(1)
    );
  }
}
