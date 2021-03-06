import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroSelectionPageComponent } from "./pages/hero-selection-page/hero-selection-page.component";

const routes: Routes = [
  {
    path: '', component: HeroSelectionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroSelectionRoutingModule { }
