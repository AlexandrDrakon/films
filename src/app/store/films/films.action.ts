import { Action } from '@ngrx/store';
import { IFilmHttp, IFilmParams } from '../../models/film.interface';

export enum EFilmsActions {
  GetFilms = '[Films] Get Films',
  GetFilmsSuccess = '[Films] Get Films Success',
  SearchFilms = '[Films] Search Films',
  SearchFilmsSuccess = '[Films] Search Films Success'
}

export class GetFilms implements Action {
  public readonly type = EFilmsActions.GetFilms;
  constructor(public payload: number) {}
}

export class GetFilmsSuccess implements Action {
  public readonly type = EFilmsActions.GetFilmsSuccess;
  constructor(public payload: IFilmHttp) {}
}

export class SearchFilms implements Action {
  public readonly type = EFilmsActions.SearchFilms;
  constructor(public payload: IFilmParams) {}
}

export class SearchFilmsSuccess implements Action {
  public readonly type = EFilmsActions.SearchFilmsSuccess;
  constructor(public payload: IFilmHttp) {}
}

export type FilmsActions = GetFilms | GetFilmsSuccess | SearchFilms | SearchFilmsSuccess;
