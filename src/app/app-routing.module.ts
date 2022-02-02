import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteGuard } from './guards/site.guard';
import { HeroSelectionPageComponent } from './hero-selection-page/hero-selection-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home', component: HomePageComponent, canActivate: [SiteGuard]
  },
  {
    path: 'hero-selection', loadChildren: () => import('./hero-selection-page/hero-selection-page.module').then(m => m.HeroSelectionPageModule), canActivate: [SiteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
