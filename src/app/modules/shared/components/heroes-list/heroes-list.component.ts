import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroPreview } from 'src/app/types/heroPreview';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent {
  @Input() public heroes: HeroPreview[] = [];
  @Input() public showAddHeroButton: boolean = false;
  @Input() public dynamicList: boolean = true;

  constructor(private _router: Router) {}

  public trackByHeroId(_: number, hero: HeroPreview): string {
    return hero.id;
  }

  public updateHeroesListAfterHeroRemove(heroId: string): void {
    this.heroes = this.heroes.filter(hero => hero.id !== heroId);
  }

  public navigateToHeroSelectionPage(): void {
    this._router.navigate(['/home/hero-selection']);
  }
}
