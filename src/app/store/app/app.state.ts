import { RouterReducerState } from '@ngrx/router-store';
import { IFilmsState, initialFilmsState } from '../films';

export interface IAppState {
  router?: RouterReducerState;
  films: IFilmsState;
}

export const initialAppState: IAppState = {
  films: initialFilmsState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
