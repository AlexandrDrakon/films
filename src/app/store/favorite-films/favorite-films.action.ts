import { Action } from '@ngrx/store';
import { IFilm } from '../../models/film.interface';

export enum EFavoriteFilms {
  GetFavoriteFilms = '[FavoriteFilms] Get Favorite Films',
  GetFavoriteFilmsSuccess = '[FavoriteFilms] Get Favorite Films Success',
  AddFavoriteFilm = '[FavoriteFilms] Add Favorite Film',
  AddFavoriteFilmSuccess = '[FavoriteFilms] Add Favorite Film Success',
  DeleteFavoriteFilm = '[FavoriteFilms] Delete Favorite Film',
  DeleteFavoriteFilmSuccess = '[FavoriteFilms] Delete Favorite Film Success'
}

export class GetFavoriteFilms implements Action {
  public readonly type = EFavoriteFilms.GetFavoriteFilms;
}

export class GetFavoriteFilmsSuccess implements Action {
  public readonly type = EFavoriteFilms.GetFavoriteFilmsSuccess;
  constructor(public payload: IFilm[]) {}
}

export class AddFavoriteFilm implements Action {
  public readonly type = EFavoriteFilms.AddFavoriteFilm;
  constructor(public payload: IFilm) {}
}

export class AddFavoriteFilmSuccess implements Action {
  public readonly type = EFavoriteFilms.AddFavoriteFilmSuccess;
  constructor(public payload: IFilm[]) {}
}

export class DeleteFavoriteFilm implements Action {
  public readonly type = EFavoriteFilms.DeleteFavoriteFilm;
  constructor(public payload: IFilm) {}
}

export class DeleteFavoriteFilmSuccess implements Action {
  public readonly type = EFavoriteFilms.DeleteFavoriteFilmSuccess;
  constructor(public payload: IFilm[]) {}
}

export type FavoriteFilmsActions =
  GetFavoriteFilms | GetFavoriteFilmsSuccess |
  AddFavoriteFilm | AddFavoriteFilmSuccess |
  DeleteFavoriteFilm | DeleteFavoriteFilmSuccess;
