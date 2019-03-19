import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  filmsUrl = `${environment.apiUrl}/movie/popular?api_key=${environment.api_key}`;

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<any> {
    return this.http.get(`${this.filmsUrl}&page=${page}`);
  }
}
