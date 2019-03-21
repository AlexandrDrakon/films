import { GetFilmsItem } from './../store/films/films.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

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

  constructor(
    private router: ActivatedRoute,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.params.id;
    this.store.dispatch(new GetFilmsItem(id));
    this.store
      .select(selectFilmsItem)
      .subscribe(data => this.filmsItem = data);
  }

}
