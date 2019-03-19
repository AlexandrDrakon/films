import { EFilmsActions, FilmsActions } from './films.action';
import { IFilmsState, initialFilmsState } from './films.state';

export const filmsReducers = (
  state = initialFilmsState,
  action: FilmsActions
): IFilmsState => {
  switch (action.type) {
    case EFilmsActions.GetFilmsSuccess: {
      return {
        ...state,
        films: action.payload
      };
    }

    default:
      return state;
  }
};
