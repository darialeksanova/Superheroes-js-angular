import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroPreview } from 'src/app/types/heroPreview';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoPageComponent implements OnInit {
  public selectedHeroes: HeroPreview[] = [];

  public ngOnInit(): void {
    this._getSelectedHeroesFromStorage();
  }

  private _getSelectedHeroesFromStorage(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');
    
    if (!selectedHeroesAsString) {
      return;
    }

    const selectedHeroesAsArray: HeroPreview[] = JSON.parse(selectedHeroesAsString);
    
    this.selectedHeroes = [...this.selectedHeroes, ...selectedHeroesAsArray];
  }
}
