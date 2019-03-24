import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../store/app';
import { selectGenresList } from '../store/genres';
import { IGenre } from '../models/genre.interface';
import { IFilm } from '../models/film.interface';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {
  genresMap = {};

  transform(film: IFilm): string {
    if (film.genre_ids) {
      return film.genre_ids
        .map(id => this.genresMap[id] || id)
        .join(', ');
    } else if (film.genres) {
      return film.genres
        .map(item => item.name)
        .join(', ');
    }
    return '';
  }

  constructor(private store: Store<IAppState>) {
    this.store
      .select(selectGenresList)
      .subscribe((genres: IGenre[]) => {
        this.genresMap = {};
        if (genres) {
          genres.forEach(genre => {
            this.genresMap[genre.id] = genre.name;
          });
        }
      });
  }
}
