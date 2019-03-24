import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { appReducers, appEffects } from './store/app';
import { environment } from '../environments/environment';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { PopularFilmsComponent } from './containers/popular-films/popular-films.component';
import { GenresPipe } from './pipes/genres.pipe';
import { FilmsItemComponent } from './films-item/films-item.component';
import { RecommendedFilmsComponent } from './containers/recommended-films/recommended-films.component';
import { FilmsShortListComponent } from './components/films-short-list/films-short-list.component';
import { SimilarFilmsComponent } from './containers/similar-films/similar-films.component';
import { FilmsFullListComponent } from './containers/films-full-list/films-full-list.component';
import { FavoriteFilmsComponent } from './containers/favorite-films/favorite-films.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularFilmsComponent,
    GenresPipe,
    FilmsItemComponent,
    RecommendedFilmsComponent,
    FilmsShortListComponent,
    SimilarFilmsComponent,
    FilmsFullListComponent,
    FavoriteFilmsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
