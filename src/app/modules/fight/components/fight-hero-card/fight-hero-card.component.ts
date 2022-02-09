import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DEFAULT_HERO_IMAGE_LINK } from 'src/app/constants/default-hero-img-link';
import { DEFAULT_HERO_PREVIEW } from 'src/app/constants/default-hero-preview';
import { HeroPreview } from 'src/app/types/hero-preview';

@Component({
  selector: 'app-fight-hero-card',
  templateUrl: './fight-hero-card.component.html',
  styleUrls: ['./fight-hero-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightHeroCardComponent {
  @Input() public hero: HeroPreview = DEFAULT_HERO_PREVIEW;

  public setDefaultHeroImage(hero: HeroPreview): void {
    hero.image.url = DEFAULT_HERO_IMAGE_LINK;
  }
}
