import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroInfoPageComponent } from "./pages/hero-info-page/hero-info-page.component";

const routes: Routes = [
  {
    path: '', component: HeroInfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroInfoRoutingModule { }
