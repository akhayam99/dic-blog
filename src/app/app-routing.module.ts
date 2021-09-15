import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule) },
  { path: 'posts', loadChildren: () => import('./posts/list/main.module').then(c => c.MainModule) },
  { path: 'posts/:id', loadChildren: () => import('./posts/detail/describe-post.module').then(c => c.DescribePostModule) },
  { path: 'posts/user/:id', loadChildren: () => import('./posts/page-user-posts/user-posts.module').then(c => c.UserPostsModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
