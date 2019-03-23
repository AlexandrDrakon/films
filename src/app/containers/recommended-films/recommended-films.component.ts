import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store/app';
import { IFilm } from '../../models/film.interface';
import { GetRecommendedFilms, selectRecommendedFilms } from '../../store/films';

@Component({
  selector: 'app-recommended-films',
  templateUrl: './recommended-films.component.html',
  styleUrls: ['./recommended-films.component.scss']
})
export class RecommendedFilmsComponent implements OnChanges {
  @Input() filmId;
  recommendedFilms: IFilm[];

  constructor(private store: Store<IAppState>) {
    this.store.select(selectRecommendedFilms)
      .subscribe(list => this.recommendedFilms = list);
   }

  ngOnChanges() {
    this.store.dispatch(new GetRecommendedFilms(this.filmId));
  }
}
