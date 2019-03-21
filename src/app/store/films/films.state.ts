import { IFilm, IFilmPagination } from '../../models/film.interface';

export interface IFilmsState {
  films: IFilm[];
  pagination: IFilmPagination;
}

export const initialFilmsState: IFilmsState = {
  films: null,
  pagination: {
    page: null,
    pageSize: null,
    totalSize: null
  }
};
