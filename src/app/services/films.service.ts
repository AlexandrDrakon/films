import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  filmsUrl = `${environment.apiUrl}/movie/popular`;

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<any> {
    const params = {
      page: `${page}`
    };
    return this.http.get(`${this.filmsUrl}`, { params });
  }
}
