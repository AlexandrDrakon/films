import { Action } from '@ngrx/store';
import { IGenre } from '../../models/genre.interface';

export enum EGenresActions {
  GetGenres = '[Genres] Get Genres',
  GetGenresSuccess = '[Genres] Get Genres Success'
}

export class GetGenres implements Action {
  public readonly type = EGenresActions.GetGenres;
}

export class GetGenresSuccess implements Action {
  public readonly type = EGenresActions.GetGenresSuccess;
  constructor(public payload: IGenre[]) {}
}

export type GenresActions = GetGenres | GetGenresSuccess;
