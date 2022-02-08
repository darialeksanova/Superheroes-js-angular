import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BattleInfo } from 'src/app/types/battle-info';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoPageComponent implements OnInit {
  public selectedHeroes: Hero[] = [];
  public battles: BattleInfo[] = [];

  public ngOnInit(): void {
    this._getSelectedHeroesFromStorage();
  }

  private _getSelectedHeroesFromStorage(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');
    
    if (!selectedHeroesAsString) {
      return;
    }

    const selectedHeroesAsArray: Hero[] = JSON.parse(selectedHeroesAsString);
    
    this.selectedHeroes = [...this.selectedHeroes, ...selectedHeroesAsArray];
  }

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
