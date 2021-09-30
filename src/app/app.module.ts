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
import { HeaderModule } from './blog/header/header.module';
import { ShoulderModule } from './blog/shoulder/shoulder.module';
import { PostService } from './_utils/services/crud/post.service';
import { effects } from './_utils/store/effects';
import { dataReducer, reducer } from './_utils/store/reducers';
import { default as authReducer } from './_utils/store/reducers/blog-auth.reducers';
import { default as infoReducer } from './_utils/store/reducers/blog-info.reducers';

const ngrxModule = [
  EffectsModule.forRoot(effects),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  StoreDevtoolsModule.instrument({ name: `DIC Blog` }),
  StoreModule.forFeature('auth', authReducer),
  StoreModule.forFeature('data', dataReducer),
  StoreModule.forFeature('info', infoReducer),
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
  StoreRouterConnectingModule.forRoot(),
  StoreRouterConnectingModule.forRoot({
    routerState: RouterState.Minimal,
  }),
]

const standardModule = [
  AppRoutingModule,
  BrowserModule,
  CommonModule,
  HeaderModule,
  HttpClientModule,
  ShoulderModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...ngrxModule,
    ...standardModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
