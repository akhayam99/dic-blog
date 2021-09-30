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
import { AuthDescriptionModule } from './auth/auth-description/auth-description.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './_utils/components/user/user.module';
import { PostService } from './_utils/services/crud/post.service';
import { effects } from './_utils/store/effects';
import { dataReducer, reducer } from './_utils/store/reducers';
import { default as authReducer } from './_utils/store/reducers/blog-auth.reducers';
import { default as infoReducer } from './_utils/store/reducers/blog-info.reducers';

const ngrxModule = [
  StoreRouterConnectingModule.forRoot(),
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
  StoreRouterConnectingModule.forRoot({
    routerState: RouterState.Minimal,
  }),
]

const standardModule = [
  AppRoutingModule,
  AuthDescriptionModule,
  AuthModule,
  BrowserModule,
  CommonModule,
  EffectsModule.forRoot(effects),
  HttpClientModule,
  UserModule,
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
