import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { FilmsService } from '../../services/films.service';
import { GetFilms, EFilmsActions, GetFilmsSuccess } from './films.action';

@Injectable()
export class FilmsEffects {
  @Effect()
  getFilms$ = this.actions$.pipe(
    ofType<GetFilms>(EFilmsActions.GetFilms),
    map(action => action.payload),
    switchMap(page => this.filmsService.getFilms(page)),
    switchMap(data => of(new GetFilmsSuccess(data)))
  );

  constructor(
    private filmsService: FilmsService,
    private actions$: Actions
  ) {}
}
