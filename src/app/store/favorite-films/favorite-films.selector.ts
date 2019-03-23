import { createSelector } from '@ngrx/store';

import { IAppState } from '../app';
import { IFavoriteFilmsState } from './favorite-films.state';

const selectFavoriteFilms = (state: IAppState) => state.favoriteFilms;

export const selectFavoriteFilmsList = createSelector(
  selectFavoriteFilms,
  (state: IFavoriteFilmsState) => state.list
);
