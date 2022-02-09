import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlphabetSelectionComponent } from "../hero-selection/components/alphabet-selection/alphabet-selection.component";
import { RecentSearchesComponent } from "../hero-selection/components/recent-searches/recent-searches.component";
import { SearchFieldComponent } from "../hero-selection/components/search-field/search-field.component";
import { SharedModule } from "../shared/shared.module";
import { HeroSelectionRoutingModule } from "./hero-selection-routing.module";
import { HeroSelectionPageComponent } from "./pages/hero-selection-page/hero-selection-page.component";

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
    HeroSelectionRoutingModule,
    SharedModule
  ]
})
export class HeroSelectionModule {}