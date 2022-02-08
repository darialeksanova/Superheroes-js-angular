import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroInfoRoutingModule } from "./hero-info-routing.module";
import { HeroInfoPageComponent } from "./pages/hero-info-page/hero-info-page.component";

@NgModule({
  declarations: [
    HeroInfoPageComponent
  ],
  imports: [
    CommonModule,
    HeroInfoRoutingModule
  ]
})
export class HeroInfoModule {}