import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { DEFAULT_HERO_FULL } from 'src/app/constants/default-hero-full';
import { DEFAULT_HERO_IMAGE_LINK } from 'src/app/constants/default-hero-img-link';
import { HeroHttpService } from 'src/app/services/hero-http.service';
import { HeroFull } from 'src/app/types/heroFull';

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroInfoPageComponent implements OnInit {
  public hero: HeroFull = DEFAULT_HERO_FULL;
  private _heroId: string = '';

  constructor(
    private _heroHttpService: HeroHttpService, 
    private _cdRef: ChangeDetectorRef,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this._getHeroIdFromParams();
    this._getFullHeroById(this._heroId);
  }

  private _getHeroIdFromParams(): void {
    this._route.params.subscribe((params: Params) => {
      this._heroId = params['id'];
    });
  }

  private _getFullHeroById(id: string): void {
    this._heroHttpService.getFullHeroInfoById(id)
      .subscribe((heroFull: HeroFull) => {
        this.hero = {
          id: heroFull.id,
          image: {
            url: heroFull.image.url,
          },
          name: heroFull.name,
          powerstats: {
            intelligence: heroFull.powerstats.intelligence,
            strength: heroFull.powerstats.strength,
            speed: heroFull.powerstats.speed,
            durability: heroFull.powerstats.durability,
            power: heroFull.powerstats.power,
            combat: heroFull.powerstats.combat
          },
          biography: {
            'full-name': heroFull.biography['full-name'],
            'alter-egos': heroFull.biography['alter-egos'],
            'place-of-birth': heroFull.biography['place-of-birth'],
            'first-appearance': heroFull.biography['first-appearance'],
            publisher: heroFull.biography.publisher,
            alignment: heroFull.biography.alignment
          },
          appearance: {
            gender: heroFull.appearance.gender,
            race: heroFull.appearance.race,
            height: heroFull.appearance.height,
            weight: heroFull.appearance.weight,
            "eye-color": heroFull.appearance['eye-color'],
            "hair-color": heroFull.appearance['hair-color']
          },
          work: {
            occupation: heroFull.work.occupation,
            base: heroFull.work.base,
          },
          connections: {
            "group-affiliation": heroFull.connections['group-affiliation'],
            relatives: heroFull.connections.relatives,
          }
        }
        this._cdRef.markForCheck();
      });
  }

  public setDefaultHeroImage(hero: HeroFull): void {
    hero.image.url = DEFAULT_HERO_IMAGE_LINK;
  }
}
