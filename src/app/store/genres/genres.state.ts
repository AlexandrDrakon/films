import { IGenre } from '../../models/genre.interface';

export interface IGenresState {
  genres: IGenre[];
}

export const initialGenresState: IGenresState = {
  genres: null
};
