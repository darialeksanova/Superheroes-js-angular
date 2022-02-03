import { Component } from '@angular/core';
import { HeroHttpService } from '../../../../services/hero-http.service';
import { Hero } from '../../../../types/hero';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent {

  public searchValueBasedOnRecentSearches: string = '';
  public heroes: Hero[] = [];
  public recentSearches: string[] = [];
  public errorOnHeroesSearch: boolean = false;

  constructor(
    private _heroService: HeroHttpService
  ) { }

  public searchHero(searchValue: string): void {
    this.addSearchValueToRecentSearches(searchValue);
    this._heroService.getHeroesByName(searchValue).subscribe({
      next: response => {

        if (response.response === 'error') {
          this.errorOnHeroesSearch = true;
        } else if (response.response === 'success') {
          this.heroes = response.results;
        }
      }
    });
  }

  private addSearchValueToRecentSearches(searchValue: string): void {
    if (this.recentSearches.includes(searchValue)) {
      return;
    }

    this.recentSearches = [...this.recentSearches, searchValue];
  }

  public setSearchValueBasedOnRecentSearches(searchValue: string): void {
    this.searchValueBasedOnRecentSearches = searchValue;
  }
}
