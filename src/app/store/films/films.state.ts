import { IFilm } from '../../models/film.interface';

export interface IFilmsState {
  films: IFilm[];
}

export const initialFilmsState: IFilmsState = {
  films: []
};
