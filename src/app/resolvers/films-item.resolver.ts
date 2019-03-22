import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { IFilm } from '../models/film.interface';
import { IAppState } from '../store/app';
import { GetFilmsItem, selectFilmsItem } from '../store/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsItemResolver implements Resolve<IFilm> {
  constructor(private store: Store<IAppState>) {}

  resolve(snapshot: ActivatedRouteSnapshot): Observable<IFilm> {
    const id = snapshot.params.id;
    this.store.dispatch(new GetFilmsItem(id));

    return this.store.pipe(
      select(selectFilmsItem),
      first(item => item && item.id === +id)
    );
  }
}
