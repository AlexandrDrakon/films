import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from './app.state';
import { filmsReducers } from '../films';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  films: filmsReducers
};
