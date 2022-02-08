import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from "../shared/shared.module";
import { BattlesHistoryTableComponent } from "./components/battles-history-table/battles-history-table.component";
import { PowerUpCardComponent } from "./components/power-up-card/power-up-card.component";
import { PowerUpsListComponent } from "./components/power-ups-list/power-ups-list.component";
import { UserInfoPageComponent } from "./pages/user-info-page/user-info-page.component";
import { UserInfoRoutingModule } from "./user-info-routing.module";

@NgModule({
  declarations: [
    PowerUpCardComponent,
    PowerUpsListComponent,
    UserInfoPageComponent,
    BattlesHistoryTableComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    UserInfoRoutingModule
  ]
})
export class UserInfoModule {}