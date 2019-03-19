import { createSelector } from '@ngrx/store';

import { IAppState } from './../app/app.state';
import { IFilmsState } from './films.state';

const selectFilms = (state: IAppState) => state.films;

export const selectFilmsList = createSelector(
  selectFilms,
  (state: IFilmsState) => state.films
);