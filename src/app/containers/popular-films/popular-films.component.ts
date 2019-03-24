import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material';

import { selectFilmsList, selectFilmsPageSize, selectFilmsTotalSize, GetFilms, SearchFilms } from '../../store/films';
import { IAppState } from '../../store/app';
import { AddFavoriteFilm } from '../../store/favorite-films';
import { IFilm } from '../../models/film.interface';

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.scss']
})
export class PopularFilmsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  films$ = this.store.select(selectFilmsList);
  pageSize$ = this.store.select(selectFilmsPageSize);
  totalSize$ = this.store.select(selectFilmsTotalSize);
  seachText = '';
  query = '';

  constructor(private store: Store<IAppState>) {}

  onChangePage(event) {
    this.getFilms(event.pageIndex + 1);
  }

  searchFilms() {
    this.query = this.seachText;
    this.paginator.pageIndex = 0;
    this.getFilms();
  }

  private getFilms(page: number = 1) {
    if (!this.query) {
      this.store.dispatch(new GetFilms(page));
    } else {
      this.store.dispatch(new SearchFilms({
        page,
        query: this.query
      }));
    }
  }

  addFavoriteFilm(film: IFilm) {
    this.store.dispatch(new AddFavoriteFilm(film));
  }
}
