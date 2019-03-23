import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IFilmParams } from '../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  urlPopularFilms = `${environment.apiUrl}/movie/popular`;
  urlSearchFilms = `${environment.apiUrl}/search/movie`;

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<any> {
    const params = {
      page: `${page}`
    };
    return this.http.get(this.urlPopularFilms, { params });
  }

  searchFilms(data: IFilmParams): Observable<any> {
    const params = {
      page: `${data.page}`,
      query: data.query
    };
    return this.http.get(this.urlSearchFilms, { params });
  }

  getFilmsItem(id: string): Observable<any> {
    const urlFilm = `${environment.apiUrl}/movie/${id}`;
    return this.http.get(urlFilm);
  }

  getRecommendedFilms(id: string): Observable<any> {
    const urlRecommendedFilms = `${environment.apiUrl}/movie/${id}/recommendations`;
    return this.http.get(urlRecommendedFilms);
  }

  getSimilarFilms(id: string): Observable<any> {
    const urlSimilarFilms = `${environment.apiUrl}/movie/${id}/similar`;
    return this.http.get(urlSimilarFilms);
  }
}
