import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FightPageComponent } from "../fight/pages/fight-page/fight-page.component";
import { FightHeroCardComponent } from "../fight/components/fight-hero-card/fight-hero-card.component";
import { BattleResultModalComponent } from "../fight/components/battle-result-modal/battle-result-modal.component";
import { FightRoutingModule } from "./fight-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    FightPageComponent,
    FightHeroCardComponent,
    BattleResultModalComponent
  ],
  imports: [
    CommonModule,
    FightRoutingModule,
    SharedModule
  ]
})
export class FightModule {}