import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UtilsFormModule } from "src/app/_utils/components/form/utils.form.module";
import { PostsListModule } from "./post-list/posts-list.module";
import { PubblicationListComponent } from "./pubblication-list.component";
import { UsersListModule } from "./user-list/users-list.module";

const module = [
  PostsListModule,
  RouterModule.forChild([{ path: '', component: PubblicationListComponent }]),
  UsersListModule,
  UtilsFormModule,
]
@NgModule({
  declarations: [
    PubblicationListComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    PubblicationListComponent
  ],
})
export class MainModule { }
