import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

import { IFilm } from '../../models/film.interface';
import { IAppState } from '../../store/app';
import { selectFavoriteFilmsList, AddFavoriteFilm, DeleteFavoriteFilm } from '../../store/favorite-films';

@Component({
  selector: 'app-films-full-list',
  templateUrl: './films-full-list.component.html',
  styleUrls: ['./films-full-list.component.scss']
})
export class FilmsFullListComponent {
  @Input() films: IFilm[];
  favoriteFilms: IFilm[];
  favoriteFilmsIds: number[];

  constructor(private store: Store<IAppState>) {
    this.store.select(selectFavoriteFilmsList)
      .subscribe(list => {
        this.favoriteFilms = list || [];
        this.favoriteFilmsIds = this.favoriteFilms.map(film => film.id);
      });
  }

  addFavoriteFilm(film: IFilm) {
    this.store.dispatch(new AddFavoriteFilm(film));
  }

  deleteFavoriteFilm(film: IFilm) {
    this.store.dispatch(new DeleteFavoriteFilm(film));
  }
}
