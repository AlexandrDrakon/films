import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/app';
import { selectFilmsList, GetFilms } from './store/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  films$ = this.store.pipe(select(selectFilmsList))
    .subscribe(data => console.log(data));

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetFilms(1));
  }
}
