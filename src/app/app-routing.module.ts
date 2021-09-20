import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(c => c.LoginPageModule ) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(c => c.RegistrationPageModule ) },
  { path: 'posts', loadChildren: () => import('./posts/list/main.module').then(c => c.MainModule) },
  { path: 'posts/:id', loadChildren: () => import('./posts/detail/describe.module').then(c => c.DescribeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
