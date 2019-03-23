import { RouterReducerState } from '@ngrx/router-store';
import { IFilmsState, initialFilmsState } from '../films';
import { IGenresState, initialGenresState } from '../genres';
import { IFavoriteFilmsState, initialFavoriteFilmsState } from '../favorite-films';

export interface IAppState {
  router?: RouterReducerState;
  films: IFilmsState;
  favoriteFilms: IFavoriteFilmsState;
  genres: IGenresState;
}

export const initialAppState: IAppState = {
  films: initialFilmsState,
  favoriteFilms: initialFavoriteFilmsState,
  genres: initialGenresState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
