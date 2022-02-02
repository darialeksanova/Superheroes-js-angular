import { Component } from '@angular/core';
import { HeroHttpService } from '../services/hero-http.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent {
  public heroes: Hero[] = [];

  constructor(
    private _heroService: HeroHttpService
  ) { }

  public searchHero(name: string) {
    this._heroService.getHeroesByName(name).subscribe(response => {
      this.heroes = response.results;
    });
  }
}
