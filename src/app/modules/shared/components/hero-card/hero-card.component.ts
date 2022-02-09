import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_HERO_PREVIEW } from 'src/app/constants/default-hero-preview';
import { DEFAULT_HERO_IMAGE_LINK } from 'src/app/constants/default-hero-img-link';
import { HeroPreview } from 'src/app/types/hero-preview';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent implements OnInit {
  @Input() public hero: HeroPreview = DEFAULT_HERO_PREVIEW;
  @Output() public heroRemoved: EventEmitter<string> = new EventEmitter<string>();

  public isHeroSelected: boolean = false;

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this._checkIfHeroIsSelected();
  }

  private _checkIfHeroIsSelected(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');
    
    if (!selectedHeroesAsString) {
      return;
    }

    const selectedHeroesAsArray: HeroPreview[] = JSON.parse(selectedHeroesAsString);
    const isHeroInSelectedHeroesArray: boolean = selectedHeroesAsArray.some(selectedHero => selectedHero.id === this.hero.id);
    
    if(isHeroInSelectedHeroesArray) {
      this.isHeroSelected = true;
    }
  }

  public setDefaultHeroImage(hero: HeroPreview): void {
    hero.image.url = DEFAULT_HERO_IMAGE_LINK;
  }

  public selectHero(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');

    if (!selectedHeroesAsString) {
      localStorage.setItem('selectedHeroes', JSON.stringify([this.hero]));
      this.isHeroSelected = true;
      return;
    }

    const selectedHeroesAsArray: HeroPreview[] = JSON.parse(selectedHeroesAsString);

    localStorage.setItem('selectedHeroes', JSON.stringify([...selectedHeroesAsArray, this.hero]));
    this.isHeroSelected = true;
  }

  public removeHero(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');

    if (!selectedHeroesAsString) {
      return;
    }

    const selectedHeroesAsArray: HeroPreview[] = JSON.parse(selectedHeroesAsString);
    const selectedHeroesAsArrayUpdated: HeroPreview[] = selectedHeroesAsArray.filter((selectedHero: HeroPreview) => selectedHero.id !== this.hero.id);

    localStorage.setItem('selectedHeroes', JSON.stringify(selectedHeroesAsArrayUpdated));
    this.isHeroSelected = false;
    this.heroRemoved.emit(this.hero.id);
  }

  public navigateToHeroInfoPage(): void {
    this._router.navigate(['home/hero-info', this.hero.id]);
  }
}
