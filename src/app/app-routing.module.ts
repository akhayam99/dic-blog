import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/auth/auth.module').then(c => c.AuthModule) },
  { path: 'posts', loadChildren: () => import('./components/main/main.module').then(c => c.MainModule) },
  { path: 'posts/:id', loadChildren: () => import('./components/describe-post/describe-post.module').then(c => c.DescribePostModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
