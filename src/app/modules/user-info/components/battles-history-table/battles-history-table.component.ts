import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BattlesDataService } from 'src/app/services/battles-data.service';
import { BattleData } from 'src/app/types/battle-data';

@Component({
  selector: 'app-battles-history-table',
  templateUrl: './battles-history-table.component.html',
  styleUrls: ['./battles-history-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlesHistoryTableComponent {
  public battles: BattleData[] = this._battlesDataService.battlesData;

  constructor(
    private _router: Router,
    private _battlesDataService: BattlesDataService
  ) {}

  public sortByDate(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.date > battle2.date ? 1 : -1);
  }

  public sortByHeroName(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.hero.name > battle2.hero.name ? 1 : -1);
  }

  public sortByOpponentName(): void {
    this.battles = [...this.battles].sort((battle1, battle2) => battle1.opponent.name > battle2.opponent.name ? 1 : -1);
  }

  public sortByResult(): void {
    const wonBattles: BattleData[] = this.battles.filter(battle => battle.result === 'Won');
    const lostBattles: BattleData[] = this.battles.filter(battle => battle.result === 'Lost');
    const drawnBattles: BattleData[] = this.battles.filter(battle => battle.result === 'Draw');

    this.battles = wonBattles.concat(lostBattles, drawnBattles);
  }

  public navigateToHeroInfoPage(id: string): void {
    this._router.navigate(['/home/hero-info', id]);
  }
}
