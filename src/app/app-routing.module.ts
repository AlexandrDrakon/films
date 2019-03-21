import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsListComponent } from './films-list/films-list.component';
import { GenresResolver } from './resolvers/genres.resolver';
import { FilmsItemComponent } from './films-item/films-item.component';

const routes: Routes = [
  { path: 'films', component: FilmsListComponent, resolve: { genres: GenresResolver} },
  { path: 'films/:id', component: FilmsItemComponent},
  { path: '', redirectTo: '/films', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
