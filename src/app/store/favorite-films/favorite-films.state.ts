import { IFilm } from './../../models/film.interface';

export interface IFavoriteFilmsState {
  list: IFilm[];
}

export const initialFavoriteFilmsState = {
  list: null
};
