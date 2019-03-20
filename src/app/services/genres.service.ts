import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  genresUrl = `${environment.apiUrl}/genre/movie/list`;

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get(this.genresUrl);
  }
}
