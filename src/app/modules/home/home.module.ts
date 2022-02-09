import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlphabetSelectionComponent } from "../hero-selection/components/alphabet-selection/alphabet-selection.component";
import { RecentSearchesComponent } from "../hero-selection/components/recent-searches/recent-searches.component";
import { SearchFieldComponent } from "../hero-selection/components/search-field/search-field.component";
import { HeroSelectionPageComponent } from "../hero-selection/pages/hero-selection-page/hero-selection-page.component";
import { HomePageRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HeroInfoModule } from "../hero-info/hero-info.module";
import { UserInfoModule } from "../user-info/user-info.module";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FightPageComponent } from "../fight/pages/fight-page/fight-page.component";
import { FightHeroCardComponent } from "../fight/components/fight-hero-card/fight-hero-card.component";
import { BattleResultModalComponent } from "../fight/components/battle-result-modal/battle-result-modal.component";

@NgModule({
  declarations: [
    SearchFieldComponent,
    AlphabetSelectionComponent,
    RecentSearchesComponent,
    HeroSelectionPageComponent,
    FightPageComponent,
    FightHeroCardComponent,
    BattleResultModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    HeroInfoModule,
    UserInfoModule,
    SharedModule,
    MatSnackBarModule
  ]
})
export class HomePageModule {}