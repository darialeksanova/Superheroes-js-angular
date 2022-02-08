import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlphabetSelectionComponent } from "../hero-selection/components/alphabet-selection/alphabet-selection.component";
import { RecentSearchesComponent } from "../hero-selection/components/recent-searches/recent-searches.component";
import { SearchFieldComponent } from "../hero-selection/components/search-field/search-field.component";
import { HeroSelectionPageComponent } from "../hero-selection/pages/hero-selection-page/hero-selection-page.component";
import { HomePageRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    SearchFieldComponent,
    AlphabetSelectionComponent,
    RecentSearchesComponent,
    HeroSelectionPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule {}