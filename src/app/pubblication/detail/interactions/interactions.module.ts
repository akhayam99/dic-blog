import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HideBlockModule } from 'src/app/_utils/components/hide-block/hide-block.module';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { InteractionsComponent } from './interactions.component';



@NgModule({
  declarations: [
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    HideBlockModule,
    UserModule
  ],
  exports: [
    InteractionsComponent
  ]
})
export class InteractionsModule { }
