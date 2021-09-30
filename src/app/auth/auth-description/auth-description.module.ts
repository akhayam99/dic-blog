import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthDescriptionComponent } from './auth-description.component';

@NgModule({
  declarations: [
    AuthDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthDescriptionComponent }]),
  ],
  exports: [
    AuthDescriptionComponent
  ]
})
export class AuthDescriptionModule { }
