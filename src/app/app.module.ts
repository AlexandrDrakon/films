import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { appReducers, appEffects } from './store/app';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
