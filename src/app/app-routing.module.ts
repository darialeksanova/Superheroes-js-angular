import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteGuard } from './guards/site.guard';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home', component: HomePageComponent, canActivate: [SiteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
