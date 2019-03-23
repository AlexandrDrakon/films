import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { FavoriteFilmsService } from '../../services/favorite-films.service';
import {
  EFavoriteFilms,
  GetFavoriteFilms,
  GetFavoriteFilmsSuccess,
  AddFavoriteFilm,
  AddFavoriteFilmSuccess,
  DeleteFavoriteFilm,
  DeleteFavoriteFilmSuccess
} from './favorite-films.action';

@Injectable()
export class FavoriteFilmsEffects {
  @Effect()
  getFavoriteFilms$ = this.actions$.pipe(
    ofType<GetFavoriteFilms>(EFavoriteFilms.GetFavoriteFilms),
    map(() => this.favoriteFilmsService.getFavoriteFilms()),
    switchMap(films => of(new GetFavoriteFilmsSuccess(films)))
  );

  @Effect()
  addFavoriteFilm$ = this.actions$.pipe(
    ofType<AddFavoriteFilm>(EFavoriteFilms.AddFavoriteFilm),
    map(action => action.payload),
    map(film => this.favoriteFilmsService.addFavoriteFilm(film)),
    switchMap(films => of(new DeleteFavoriteFilmSuccess(films)))
  );

  @Effect()
  deleteFavoriteFilm$ = this.actions$.pipe(
    ofType<DeleteFavoriteFilm>(EFavoriteFilms.DeleteFavoriteFilm),
    map(action => action.payload),
    map(film => this.favoriteFilmsService.deleteFavoriteFilm(film)),
    switchMap(films => of(new DeleteFavoriteFilmSuccess(films)))
  );

  constructor(
    private favoriteFilmsService: FavoriteFilmsService,
    private actions$: Actions
  ) {}
}
