import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', canActivate: [AuthGuardService], component: AppComponent, },
//   { path: 'login', loadChildren: () => import('./auth/login/login-page.module').then(c => c.LoginPageModule) },
//   { path: 'registration', loadChildren: () => import('./auth/registration/registration-page.module').then(c => c.RegistrationPageModule) },
//   { path: 'posts', loadChildren: () => import('./posts/list/main.module').then(c => c.MainModule), canActivate: [AuthGuardService] },
//   { path: 'posts/:id', loadChildren: () => import('./posts/detail/describe.module').then(c => c.DescribeModule), canActivate: [AuthGuardService] },
//   { path: 'create', loadChildren: () => import('./posts/new-post/new-post.module').then(c => c.NewPostModule), canActivate: [AuthGuardService] },
// ];

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent, },
  { path: 'login', loadChildren: () => import('./auth/login/login-page.module').then(c => c.LoginPageModule) },
  { path: 'registration', loadChildren: () => import('./auth/registration/registration-page.module').then(c => c.RegistrationPageModule) },
  { path: 'posts', loadChildren: () => import('./posts/list/main.module').then(c => c.MainModule) },
  { path: 'posts/:id', loadChildren: () => import('./posts/detail/describe.module').then(c => c.DescribeModule) },
  { path: 'posts/create', loadChildren: () => import('./posts/new-post/new-post.module').then(c => c.NewPostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
