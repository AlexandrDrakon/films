import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { IAppState } from '../store/app';
import { selectFilmsItem } from '../store/films';
import { IFilm } from '../models/film.interface';

@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.scss']
})
export class FilmsItemComponent implements OnInit {
  filmsItem: IFilm;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .select(selectFilmsItem)
      .subscribe(data => this.filmsItem = data);
  }

}
