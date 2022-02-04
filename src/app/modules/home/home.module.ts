import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlphabetSelectionComponent } from "../hero-selection/components/alphabet-selection/alphabet-selection.component";
import { HeroCardComponent } from "../hero-selection/components/hero-card/hero-card.component";
import { HeroesListComponent } from "../hero-selection/components/heroes-list/heroes-list.component";
import { RecentSearchesComponent } from "../hero-selection/components/recent-searches/recent-searches.component";
import { SearchFieldComponent } from "../hero-selection/components/search-field/search-field.component";
import { HeroSelectionPageComponent } from "../hero-selection/pages/hero-selection-page/hero-selection-page.component";
import { UserInfoPageComponent } from "../user-info/pages/user-info-page/user-info-page.component";
import { HomePageRoutingModule } from "./home-routing.module";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    SearchFieldComponent,
    AlphabetSelectionComponent,
    HeroesListComponent,
    HeroCardComponent,
    RecentSearchesComponent,
    HeroSelectionPageComponent,
    UserInfoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    MatTabsModule
  ]
})
export class HomePageModule {}