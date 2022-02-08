import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroCardComponent } from "./components/hero-card/hero-card.component";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesListComponent,
    HeroCardComponent
  ]
})
export class SharedModule {}