import { Component } from '@angular/core';
import { BattleInfo } from 'src/app/types/battle-info';

@Component({
  selector: 'app-battles-history-table',
  templateUrl: './battles-history-table.component.html',
  styleUrls: ['./battles-history-table.component.scss']
})
export class BattlesHistoryTableComponent {
  public battles: BattleInfo[] = [];

  public sortByDate(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.battleDate > battle2.battleDate ? 1 : -1);
  }

  public sortByHeroName(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.heroName > battle2.heroName ? 1 : -1);
  }

  public sortByOpponentName(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.opponentName > battle2.opponentName ? 1 : -1);
  }

  public sortByResult(): void {
    const wonBattles: BattleInfo[] = this.battles.filter(battle => battle.battleResult === 'Won');
    const lostBattles: BattleInfo[] = this.battles.filter(battle => battle.battleResult === 'Lost');
    this.battles = wonBattles.concat(lostBattles);
  }
}
