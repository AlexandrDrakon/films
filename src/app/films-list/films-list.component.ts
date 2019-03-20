import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectFilmsList, GetFilms } from '../store/films';
import { IAppState } from '../store/app';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  films$ = this.store.pipe(
    select(selectFilmsList)
  );

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetFilms(1));
  }
}
