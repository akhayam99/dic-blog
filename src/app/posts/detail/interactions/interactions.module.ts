import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { InteractionsComponent } from './interactions.component';



@NgModule({
  declarations: [
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    InteractionsComponent
  ]
})
export class InteractionsModule { }
