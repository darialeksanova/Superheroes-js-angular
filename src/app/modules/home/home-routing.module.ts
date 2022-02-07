import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroSelectionPageComponent } from "../hero-selection/pages/hero-selection-page/hero-selection-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: '/home/hero-selection'
  }, 
  {
    path: '', component: HomePageComponent, children: [
      {
        path: 'hero-selection', component: HeroSelectionPageComponent
      },
      {
        path: 'user-info', loadChildren: () => import('../user-info/user-info.module').then(m => m.UserInfoModule)
      },
      {
        path: 'hero-info/:id', loadChildren: () => import('../hero-info/hero-info.module').then(m => m.HeroInfoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
