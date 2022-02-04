import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { HeroByNameResponse, HeroByNameSuccessResponse } from 'src/app/types/heroByNameResponse';
import { HeroHttpService } from '../../../../services/hero-http.service';
import { Hero } from '../../../../types/hero';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent {
  public searchValue: string = '';
  public heroes: Hero[] = [];
  public recentSearches: string[] = [];
  public errorOnHeroesSearch: boolean = false;

  constructor(
    private _heroService: HeroHttpService
  ) {}

  public searchHero(searchValue: string): void {
    this._addSearchValueToRecentSearches(searchValue);
    this._heroService.getHeroesByName(searchValue)
      .pipe(
        tap((response: HeroByNameSuccessResponse) => this.heroes = response.results),
        catchError((error: unknown) => {
          this.errorOnHeroesSearch = true;
          return of(error);
        }),
      )
      .subscribe();
  }

  private _addSearchValueToRecentSearches(searchValue: string): void {
    const isSearchValueInRecentSearches: boolean = this.recentSearches.includes(searchValue);

    if (isSearchValueInRecentSearches) {
      return;
    }

    this.recentSearches = [...this.recentSearches, searchValue];
  }

  public setSearchValueBasedOnRecentSearches(searchValue: string): void {
    this.searchValue = searchValue;
  }
}
