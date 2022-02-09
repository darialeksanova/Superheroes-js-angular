import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";import { FightPageComponent } from "./pages/fight-page/fight-page.component";
;

const routes: Routes = [
  {
    path: '', component: FightPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FightRoutingModule { }
