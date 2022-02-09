import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroCardComponent } from "./components/hero-card/hero-card.component";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesListComponent,
    HeroCardComponent, 
    LoaderComponent
  ]
})
export class SharedModule {}