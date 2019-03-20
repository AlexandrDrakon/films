import { createSelector } from '@ngrx/store';

import { IAppState } from '../app';
import { IGenresState } from './genres.state';

const selectGenres = (state: IAppState) => state.genres;

export const selectGenresList = createSelector(
  selectGenres,
  (state: IGenresState) => state.genres
);
