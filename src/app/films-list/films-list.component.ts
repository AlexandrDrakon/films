import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFilmsList, selectFilmsPageSize, selectFilmsTotalSize, GetFilms } from '../store/films';
import { IAppState } from '../store/app';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  films$ = this.store.select(selectFilmsList);
  pageSize$ = this.store.select(selectFilmsPageSize);
  totalSize$ = this.store.select(selectFilmsTotalSize);

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetFilms());
  }

  onChangePage(event) {
    this.store.dispatch(new GetFilms(event.pageIndex + 1));
  }
}
