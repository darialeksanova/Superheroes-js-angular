import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlphabetSelectionComponent } from "./components/alphabet-selection/alphabet-selection.component";
import { HeroCardComponent } from "./components/hero-card/hero-card.component";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";
import { SearchFieldComponent } from "./components/search-field/search-field.component";
import { HeroSelectionPageRoutingModule } from "./hero-selection-page-routing.module";
import { HeroSelectionPageComponent } from "./hero-selection-page.component";
import { RecentSearchesComponent } from './components/recent-searches/recent-searches.component';

@NgModule({
  declarations: [
    HeroSelectionPageComponent,
    SearchFieldComponent,
    AlphabetSelectionComponent,
    HeroesListComponent,
    HeroCardComponent,
    RecentSearchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroSelectionPageRoutingModule,
  ]
})
export class HeroSelectionPageModule {}