import { Injectable } from '@angular/core';
import { IFilm } from '../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteFilmsService {
  KEY_LOCAL_STORAGE = 'favorite-films';

  constructor() { }

  getFavoriteFilms() {
    return JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE)) || [];
  }

  addFavoriteFilm(film: IFilm) {
    const favoriteFilms: IFilm[] = JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE)) || [];
    const isFindFilm = favoriteFilms.some(item => item.id === film.id);

    if (!isFindFilm) {
      const newFavoriteFilms = favoriteFilms.concat(film);
      localStorage.setItem(this.KEY_LOCAL_STORAGE, JSON.stringify(newFavoriteFilms));
      return newFavoriteFilms;
    }

    return favoriteFilms;
  }

  deleteFavoriteFilm(film: IFilm) {
    const favoriteFilms: IFilm[] = JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE)) || [];
    const isFindFilm = favoriteFilms.some(item => item.id === film.id);

    if (isFindFilm) {
      const newFavoriteFilms = favoriteFilms.filter(item => item.id !== film.id);
      localStorage.setItem(this.KEY_LOCAL_STORAGE, JSON.stringify(newFavoriteFilms));
      return newFavoriteFilms;
    }

    return favoriteFilms;
  }
}
