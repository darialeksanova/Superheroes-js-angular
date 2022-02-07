import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent {
  @Input() public heroes: Hero[] = [];
  @Input() public showAddHeroButton: boolean = false;
  @Input() public dynamicList: boolean = true;

  constructor(private _router: Router) {}

  public trackByHeroId(_: number, hero: Hero): string {
    return hero.id;
  }

  public updateHeroesListAfterHeroRemove(heroId: string): void {
    this.heroes = this.heroes.filter(hero => hero.id !== heroId);
  }

  public navigateToHeroSelectionPage(): void {
    this._router.navigate(['/home/hero-selection']);
  }
}