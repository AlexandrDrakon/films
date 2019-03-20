import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsListComponent } from './films-list/films-list.component';

const routes: Routes = [
  { path: 'films', component: FilmsListComponent },
  { path: '', redirectTo: '/films', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
