import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/login-page/login-page.module').then(c => c.LoginPageModule) },
  { path: 'posts', loadChildren: () => import('./posts/list/main.module').then(c => c.MainModule) },
  { path: 'posts/:id', loadChildren: () => import('./posts/detail/describe.module').then(c => c.DescribeModule) },
  { path: 'registration', loadChildren: () => import('./auth/registration-page/registration-page.module').then(c => c.RegistrationPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
