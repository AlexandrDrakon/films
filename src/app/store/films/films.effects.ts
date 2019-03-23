import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { FilmsService } from '../../services/films.service';
import {
  EFilmsActions,
  GetFilms,
  GetFilmsSuccess,
  SearchFilms,
  SearchFilmsSuccess,
  GetFilmsItem,
  GetFilmsItemSuccess,
  GetRecommendedFilms,
  GetRecommendedFilmsSuccess,
  GetSimilarFilms,
  GetSimilarFilmsSuccess
} from './films.action';

@Injectable()
export class FilmsEffects {
  @Effect()
  getFilms$ = this.actions$.pipe(
    ofType<GetFilms>(EFilmsActions.GetFilms),
    map(action => action.payload),
    switchMap(page => this.filmsService.getFilms(page)),
    switchMap(response => of(new GetFilmsSuccess(response)))
  );

  @Effect()
  searchFilms$ = this.actions$.pipe(
    ofType<SearchFilms>(EFilmsActions.SearchFilms),
    map(action => action.payload),
    switchMap(data => this.filmsService.searchFilms(data)),
    switchMap(response => of(new SearchFilmsSuccess(response)))
  );

  @Effect()
  getFilmsItem$ = this.actions$.pipe(
    ofType<GetFilmsItem>(EFilmsActions.GetFilmsItem),
    map(action => action.payload),
    switchMap(id => this.filmsService.getFilmsItem(id)),
    switchMap(response => of(new GetFilmsItemSuccess(response)))
  );

  @Effect()
  getRecommendedFilms$ = this.actions$.pipe(
    ofType<GetRecommendedFilms>(EFilmsActions.GetRecommendedFilms),
    map(action => action.payload),
    switchMap(id => this.filmsService.getRecommendedFilms(id)),
    switchMap(response => of(new GetRecommendedFilmsSuccess(response)))
  );

  @Effect()
  getSimilarFilms$ = this.actions$.pipe(
    ofType<GetSimilarFilms>(EFilmsActions.GetSimilarFilms),
    map(action => action.payload),
    switchMap(id => this.filmsService.getSimilarFilms(id)),
    switchMap(response => of(new GetSimilarFilmsSuccess(response)))
  );

  constructor(
    private filmsService: FilmsService,
    private actions$: Actions
  ) {}
}
