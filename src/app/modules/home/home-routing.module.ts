import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        path: 'hero-selection', loadChildren: () => import('../hero-selection/hero-selection.module').then(m => m.HeroSelectionModule)
      },
      {
        path: 'user-info', loadChildren: () => import('../user-info/user-info.module').then(m => m.UserInfoModule)
      },
      {
        path: 'hero-info/:id', loadChildren: () => import('../hero-info/hero-info.module').then(m => m.HeroInfoModule)
      },
      {
        path: 'fight', loadChildren: () => import('../fight/fight.module').then(m => m.FightModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
