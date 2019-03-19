import { Action } from '@ngrx/store';
import { IFilm } from '../../models/film.interface';

export enum EFilmsActions {
  GetFilms = '[Films] Get Films',
  GetFilmsSuccess = '[Films] Get Films Success'
}

export class GetFilms implements Action {
  public readonly type = EFilmsActions.GetFilms;
  constructor(public payload: number) {}
}

export class GetFilmsSuccess implements Action {
  public readonly type = EFilmsActions.GetFilmsSuccess;
  constructor(public payload: IFilm[]) {}
}

export type FilmsActions = GetFilms | GetFilmsSuccess;
