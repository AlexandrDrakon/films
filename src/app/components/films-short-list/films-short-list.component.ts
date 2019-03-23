import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films-short-list',
  templateUrl: './films-short-list.component.html',
  styleUrls: ['./films-short-list.component.scss']
})
export class FilmsShortListComponent {
  @Input() films;

  constructor() {}
}
