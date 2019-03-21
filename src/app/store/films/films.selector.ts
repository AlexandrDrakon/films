import { createSelector } from '@ngrx/store';

import { IAppState } from '../app';
import { IFilmsState } from './films.state';

const selectFilms = (state: IAppState) => state.films;

export const selectFilmsList = createSelector(
  selectFilms,
  (state: IFilmsState) => state.films
);

export const selectFilmsPageSize = createSelector(
  selectFilms,
  (state: IFilmsState) => state.pagination.pageSize
);

export const selectFilmsTotalSize = createSelector(
  selectFilms,
  (state: IFilmsState) => state.pagination.totalSize
);
