import { IFilm, IFilmsWithPagination } from '../../models/film.interface';

export interface IFilmsState {
  films: IFilmsWithPagination;
  filmsItem: IFilm;
  recommendedFilms: IFilmsWithPagination;
  similarFilms: IFilmsWithPagination;
}

export const initialFilmsState: IFilmsState = {
  films: {
    list: null,
    pagination: {
      page: null,
      pageSize: null,
      totalSize: null
    }
  },
  filmsItem: null,
  recommendedFilms: {
    list: null
  },
  similarFilms: {
    list: null
  }
};
