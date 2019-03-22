import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsItemComponent } from './films-item/films-item.component';
import { GenresResolver } from './resolvers/genres.resolver';
import { FilmsListResolver } from './resolvers/films-list.resolver';
import { FilmsItemResolver } from './resolvers/films-item.resolver';

const routes: Routes = [
  { path: 'films', component: FilmsListComponent, resolve: { genres: GenresResolver, filmsList: FilmsListResolver } },
  { path: 'films/:id', component: FilmsItemComponent, resolve: { filmsItem: FilmsItemResolver } },
  { path: '', redirectTo: '/films', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
