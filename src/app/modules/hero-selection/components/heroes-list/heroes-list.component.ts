import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  @Input() public heroes: Hero[] = [];

  public trackByHeroId(idx: number, hero: Hero): string {
    return hero.id;
  }
}
