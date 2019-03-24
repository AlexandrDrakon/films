import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { IAppState } from '../../store/app';
import { selectFilmsItem } from '../../store/films';
import { selectFavoriteFilmsList, GetFavoriteFilms, AddFavoriteFilm, DeleteFavoriteFilm } from '../../store/favorite-films';
import { IFilm } from '../../models/film.interface';

@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.scss']
})
export class FilmsItemComponent {
  filmsItem: IFilm;
  favoriteFilmsIds: number[];

  constructor(private store: Store<IAppState>) {
    this.store.dispatch(new GetFavoriteFilms());
    this.store.select(selectFilmsItem)
      .subscribe(data => this.filmsItem = data);
    this.store.select(selectFavoriteFilmsList)
      .subscribe(list => {
        const favoriteFilms = list || [];
        this.favoriteFilmsIds = favoriteFilms.map(film => film.id);
      });
  }

  addFavoriteFilm(film: IFilm) {
    this.store.dispatch(new AddFavoriteFilm(film));
  }

  deleteFavoriteFilm(film: IFilm) {
    this.store.dispatch(new DeleteFavoriteFilm(film));
  }
}
