import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './_utils/components/components.module';
import { PostService } from './_utils/services/crud/post.service';
import { effects } from './_utils/store/effects';
import { dataReducer, reducer } from './_utils/store/reducers';

const module = [
  AppRoutingModule,
  BrowserModule,
  CommonModule,
  ComponentsModule,
  HttpClientModule,
  EffectsModule.forFeature(effects),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({ name: `DIC Blog` }),
  StoreModule.forFeature('data', dataReducer),
  StoreModule.forRoot(reducer, {
    runtimeChecks: {
      strictActionImmutability: false,
      strictActionSerializability: false,
      strictActionTypeUniqueness: false,
      strictActionWithinNgZone: false,
      strictStateImmutability: false,
      strictStateSerializability: false,
    },
  }),
  StoreRouterConnectingModule.forRoot({
    routerState: RouterState.Minimal,
  }),
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...module,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
