import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../store/app';
import { selectGenresList } from '../store/genres';
import { IGenre } from '../models/genre.interface';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {
  genresMap = {};

  transform(genreIds: number[]): any {
    return genreIds.map(id => this.genresMap[id] || id)
      .join(', ');
  }

  constructor(private store: Store<IAppState>) {
    this.store
      .select(selectGenresList)
      .subscribe((genres: IGenre[]) => {
        this.genresMap = {};
        genres.forEach(genre => {
          this.genresMap[genre.id] = genre.name;
        });
      });
  }
}
