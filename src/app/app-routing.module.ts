import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/page-login/auth.module').then(c => c.AuthModule) },
  { path: 'posts', loadChildren: () => import('./components/page-posts/main.module').then(c => c.MainModule) },
  { path: 'posts/:id', loadChildren: () => import('./components/page-post/describe-post.module').then(c => c.DescribePostModule) },
  { path: 'posts/user/:id', loadChildren: () => import('./posts/page-user-posts/user-posts.module').then(c => c.UserPostsModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
