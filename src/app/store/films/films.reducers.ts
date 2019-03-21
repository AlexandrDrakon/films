import { EFilmsActions, FilmsActions } from './films.action';
import { IFilmsState, initialFilmsState } from './films.state';

export const filmsReducers = (
  state = initialFilmsState,
  action: FilmsActions
): IFilmsState => {
  switch (action.type) {
    case EFilmsActions.GetFilmsSuccess:
    case EFilmsActions.SearchFilmsSuccess: {
      return {
        ...state,
        films: action.payload.results,
        pagination: {
          page: action.payload.page,
          pageSize: action.payload.results.length,
          totalSize: action.payload.total_results
        }
      };
    }

    case EFilmsActions.GetFilmsItemSuccess: {
      return {
        ...state,
        filmsItem: action.payload
      };
    }

    default:
      return state;
  }
};
