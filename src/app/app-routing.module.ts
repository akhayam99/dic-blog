import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './_utils/permissions/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent, },
  { path: 'login', loadChildren: () => import('./blog/description/description.module').then(c => c.DescriptionModule) },
  { path: 'registration', loadChildren: () => import('./blog/description/description.module').then(c => c.DescriptionModule) },
  { path: 'posts', loadChildren: () => import('./pubblication/list/pubblication-list.module').then(c => c.MainModule) },
  { path: 'posts/view/:id', loadChildren: () => import('./pubblication/detail/describe.module').then(c => c.DescribeModule) },
  { path: 'posts/create', loadChildren: () => import('./pubblication/new-post/new-post.module').then(c => c.NewPostModule), canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
