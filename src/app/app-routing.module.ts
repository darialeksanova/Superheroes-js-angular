import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: 
      () => import('./modules/login/login.module')
        .then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: 
      () => import('./modules/home/home.module')
        .then(m => m.HomePageModule), 
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
