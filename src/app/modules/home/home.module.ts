import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HeroInfoModule } from "../hero-info/hero-info.module";
import { UserInfoModule } from "../user-info/user-info.module";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FightModule } from "../fight/fight.module";
import { HeroSelectionModule } from "../hero-selection/hero-selection.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroSelectionModule,
    HeroInfoModule,
    UserInfoModule,
    FightModule,
    SharedModule,
    MatSnackBarModule
  ]
})
export class HomeModule {}