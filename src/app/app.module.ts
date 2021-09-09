import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PostService } from './services/data/post.service';

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
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
