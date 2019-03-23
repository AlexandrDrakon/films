import { createSelector } from '@ngrx/store';

import { IAppState } from '../app';
import { IFilmsState } from './films.state';

const selectFilms = (state: IAppState) => state.films;

export const selectFilmsList = createSelector(
  selectFilms,
  (state: IFilmsState) => state.films.list
);

export const selectFilmsPageSize = createSelector(
  selectFilms,
  (state: IFilmsState) => state.films.pagination.pageSize
);

export const selectFilmsTotalSize = createSelector(
  selectFilms,
  (state: IFilmsState) => state.films.pagination.totalSize
);

export const selectFilmsItem = createSelector(
  selectFilms,
  (state: IFilmsState) => state.filmsItem
);

export const selectRecommendedFilms = createSelector(
  selectFilms,
  (state: IFilmsState) => state.recommendedFilms.list
);
