import { Store } from '@ngrx/store';
import { Component, Input, OnChanges } from '@angular/core';

import { IAppState } from '../../store/app/app.state';
import { IFilm } from '../../models/film.interface';
import { GetSimilarFilms, selectSimilarFilms } from '../../store/films';

@Component({
  selector: 'app-similar-films',
  templateUrl: './similar-films.component.html',
  styleUrls: ['./similar-films.component.scss']
})
export class SimilarFilmsComponent implements OnChanges {
  @Input() filmId;
  similarFilms: IFilm[];

  constructor(private store: Store<IAppState>) {
    this.store.select(selectSimilarFilms)
      .subscribe(list => this.similarFilms = list);
  }

  ngOnChanges() {
    this.store.dispatch(new GetSimilarFilms(this.filmId));
  }
}
