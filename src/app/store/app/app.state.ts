import { RouterReducerState } from '@ngrx/router-store';
import { IFilmsState, initialFilmsState } from '../films';
import { IGenresState, initialGenresState } from '../genres';

export interface IAppState {
  router?: RouterReducerState;
  films: IFilmsState;
  genres: IGenresState;
}

export const initialAppState: IAppState = {
  films: initialFilmsState,
  genres: initialGenresState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
