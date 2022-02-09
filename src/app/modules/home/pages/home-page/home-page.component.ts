import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HeroPreview } from 'src/app/types/heroPreview';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  public handleFightPageLinkClick(): void {
    const selectedHeroesFromStorage: HeroPreview[] | null = this._getSelectedHeroesFormStorage();

    if (!selectedHeroesFromStorage || !selectedHeroesFromStorage.length) {
      this._navigateToHeroSelectionPage();
    } else {
      this._navigateToFightPage();
    }
  }

  private _getSelectedHeroesFormStorage(): HeroPreview[] | null {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');

    if (!selectedHeroesAsString) {
      return null;
    }

    return JSON.parse(selectedHeroesAsString);
  }

  private _navigateToFightPage(): void {
    this._router.navigate(['/home/fight']);
  }

  private _navigateToHeroSelectionPage(): void {
    this._router.navigate(['/home/hero-selection']);
    this._snackBar.open("You haven't chosen any heroes. Select at least two of them and go fighting!");
  }
}
