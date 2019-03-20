import { GenresActions, EGenresActions } from './genres.action';
import { initialGenresState, IGenresState } from './genres.state';

export const genresReducers = (
  state = initialGenresState,
  action: GenresActions
): IGenresState => {
  switch (action.type) {
    case EGenresActions.GetGenresSuccess: {
      return {
        ...state,
        genres: action.payload
      };
    }

    default:
      return state;
  }
};
