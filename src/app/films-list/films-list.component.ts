import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material';

import { selectFilmsList, selectFilmsPageSize, selectFilmsTotalSize, GetFilms, SearchFilms } from '../store/films';
import { IAppState } from '../store/app';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  films$ = this.store.select(selectFilmsList);
  pageSize$ = this.store.select(selectFilmsPageSize);
  totalSize$ = this.store.select(selectFilmsTotalSize);
  seachText = '';
  query = '';

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetFilms(1));
  }

  onChangePage(event) {
    this.getFilms(event.pageIndex + 1);
  }

  searchFilms() {
    this.query = this.seachText;
    this.paginator.firstPage();
    this.getFilms();
  }

  getFilms(page: number = 1) {
    if (!this.query) {
      this.store.dispatch(new GetFilms(page));
    } else {
      this.store.dispatch(new SearchFilms({
        page,
        query: this.query
      }));
    }
  }
}
