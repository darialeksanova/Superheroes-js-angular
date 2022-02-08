import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserInfoPageComponent } from "../user-info/pages/user-info-page/user-info-page.component";

const routes: Routes = [
  {
    path: '', component: UserInfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfoRoutingModule { }
