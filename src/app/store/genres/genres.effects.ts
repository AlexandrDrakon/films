import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GenresService } from '../../services/genres.service';
import { GetGenres, EGenresActions, GetGenresSuccess } from './genres.action';

@Injectable()
export class GenresEffects {
  @Effect()
  getGenres$ = this.actions$.pipe(
    ofType<GetGenres>(EGenresActions.GetGenres),
    switchMap(() => this.genresService.getGenres()),
    switchMap(data => of(new GetGenresSuccess(data.genres)))
  );

  constructor(
    private genresService: GenresService,
    private actions$: Actions
  ) {}
}
