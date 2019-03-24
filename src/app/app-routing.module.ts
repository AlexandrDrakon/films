import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularFilmsComponent } from './containers/popular-films/popular-films.component';
import { FilmsItemComponent } from './containers/films-item/films-item.component';
import { FavoriteFilmsComponent } from './containers/favorite-films/favorite-films.component';
import { GenresResolver } from './resolvers/genres.resolver';
import { FilmsListResolver } from './resolvers/films-list.resolver';
import { FilmsItemResolver } from './resolvers/films-item.resolver';

const routes: Routes = [
  { path: 'popular-films', component: PopularFilmsComponent, resolve: { genres: GenresResolver, filmsList: FilmsListResolver } },
  { path: 'popular-films/:id', component: FilmsItemComponent, resolve: { filmsItem: FilmsItemResolver } },
  { path: 'favorite-films', component: FavoriteFilmsComponent, resolve: { genres: GenresResolver } },
  { path: '', redirectTo: '/popular-films', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
