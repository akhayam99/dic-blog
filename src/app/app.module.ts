import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PostService } from './services/data/post.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const module = [
  AppRoutingModule,
  BrowserModule,
  CommonModule,
  ComponentsModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...module,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
