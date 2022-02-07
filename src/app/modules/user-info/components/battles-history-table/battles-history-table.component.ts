import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BattleInfo } from 'src/app/types/battle-info';

@Component({
  selector: 'app-battles-history-table',
  templateUrl: './battles-history-table.component.html',
  styleUrls: ['./battles-history-table.component.scss']
})
export class BattlesHistoryTableComponent {
  public battles: BattleInfo[] = [];

  constructor(private _router: Router) {}

  public sortByDate(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.battleDate > battle2.battleDate ? 1 : -1);
  }

  public sortByHeroName(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.hero.name > battle2.hero.name ? 1 : -1);
  }

  public sortByOpponentName(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.opponent.name > battle2.opponent.name ? 1 : -1);
  }

  public sortByResult(): void {
    const wonBattles: BattleInfo[] = this.battles.filter(battle => battle.battleResult === 'Won');
    const lostBattles: BattleInfo[] = this.battles.filter(battle => battle.battleResult === 'Lost');

    this.battles = wonBattles.concat(lostBattles);
  }

  public navigateToHeroInfoPage(id: string): void {
    this._router.navigate(['/home/hero-info', id]);
  }
}
