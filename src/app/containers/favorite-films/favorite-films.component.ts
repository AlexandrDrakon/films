import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { IFilm } from '../../models/film.interface';
import { IAppState } from '../../store/app';
import { selectFavoriteFilmsList, GetFavoriteFilms } from '../../store/favorite-films';

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.scss']
})
export class FavoriteFilmsComponent {
  favoriteFilms: IFilm[];

  constructor(private store: Store<IAppState>) {
    this.store.dispatch(new GetFavoriteFilms());
    this.store.select(selectFavoriteFilmsList)
      .subscribe(list => this.favoriteFilms = list || []);
  }
}
