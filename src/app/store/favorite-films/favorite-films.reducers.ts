import { FavoriteFilmsActions, EFavoriteFilms } from './favorite-films.action';
import { initialFavoriteFilmsState, IFavoriteFilmsState } from './favorite-films.state';

export const favoriteFilmsReducers = (
  state = initialFavoriteFilmsState,
  action: FavoriteFilmsActions
): IFavoriteFilmsState => {
  switch (action.type) {
    case EFavoriteFilms.GetFavoriteFilmsSuccess:
    case EFavoriteFilms.AddFavoriteFilmSuccess:
    case EFavoriteFilms.DeleteFavoriteFilmSuccess: {
      return {
        ...state,
        list: action.payload
      };
    }

    default:
      return state;
  }
};
