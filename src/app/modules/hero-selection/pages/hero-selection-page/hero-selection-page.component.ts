import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { HeroByNameSuccessResponse } from 'src/app/types/hero-by-name-response';
import { HeroHttpService } from '../../../../services/hero-http.service';
import { HeroPreview } from '../../../../types/heroPreview';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSelectionPageComponent {
  public searchValue: string = '';
  public heroes: HeroPreview[] = [];
  public recentSearches: string[] = [];
  public errorOnHeroesSearch: boolean = false;

  constructor(
    private _heroService: HeroHttpService,
    private _cdRef: ChangeDetectorRef,
  ) {}

  public searchHero(searchValue: string): void {
    this._addSearchValueToRecentSearches(searchValue);
    this._heroService.getHeroesByName(searchValue)
      .pipe(
        tap((response: HeroByNameSuccessResponse) => {
          this.heroes = response.results;
          this._cdRef.markForCheck();
        }),
        catchError((error: unknown) => {
          this.errorOnHeroesSearch = true;
          this._cdRef.markForCheck();
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
