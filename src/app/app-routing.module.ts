import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '', 
    loadChildren: 
      () => import('./modules/login/login.module')
        .then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: 
      () => import('./modules/home/home.module')
        .then(m => m.HomeModule), 
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
