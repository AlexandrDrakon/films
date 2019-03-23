import { Action } from '@ngrx/store';
import { IFilmHttp, IFilmParams, IFilm } from '../../models/film.interface';

export enum EFilmsActions {
  GetFilms = '[Films] Get Films',
  GetFilmsSuccess = '[Films] Get Films Success',
  SearchFilms = '[Films] Search Films',
  SearchFilmsSuccess = '[Films] Search Films Success',
  GetFilmsItem = '[Films] Get Films Item',
  GetFilmsItemSuccess = '[Films] Get Films Item Success',
  GetRecommendedFilms = '[Films] Get Recommended Films',
  GetRecommendedFilmsSuccess = '[Films] Get Recommended Films Success',
  GetSimilarFilms = '[Films] Get Similar Films',
  GetSimilarFilmsSuccess = '[Films] Get Similar Films Success'
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

export class GetFilmsItem implements Action {
  public readonly type = EFilmsActions.GetFilmsItem;
  constructor(public payload: string) {}
}

export class GetFilmsItemSuccess implements Action {
  public readonly type = EFilmsActions.GetFilmsItemSuccess;
  constructor(public payload: IFilm) {}
}

export class GetRecommendedFilms implements Action {
  public readonly type = EFilmsActions.GetRecommendedFilms;
  constructor(public payload: string) {}
}

export class GetRecommendedFilmsSuccess implements Action {
  public readonly type = EFilmsActions.GetRecommendedFilmsSuccess;
  constructor(public payload: IFilmHttp) {}
}

export class GetSimilarFilms implements Action {
  public readonly type = EFilmsActions.GetSimilarFilms;
  constructor(public payload: string) {}
}

export class GetSimilarFilmsSuccess implements Action {
  public readonly type = EFilmsActions.GetSimilarFilmsSuccess;
  constructor(public payload: IFilmHttp) {}
}

export type FilmsActions =
  GetFilms | GetFilmsSuccess |
  SearchFilms | SearchFilmsSuccess |
  GetFilmsItem | GetFilmsItemSuccess |
  GetRecommendedFilms | GetRecommendedFilmsSuccess |
  GetSimilarFilms | GetSimilarFilmsSuccess;
