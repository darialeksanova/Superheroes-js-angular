import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { DEFAULT_BATTLE_DATA } from 'src/app/constants/default-battle-data';
import { DEFAULT_HERO_PREVIEW } from 'src/app/constants/default-hero-preview';
import { POSSIBLE_BATTLE_RESULTS } from 'src/app/constants/possible-battle-results';
import { BattlesDataService } from 'src/app/services/battles-data.service';
import { HeroHttpService } from 'src/app/services/hero-http.service';
import { PowerUpsService } from 'src/app/services/power-ups.service';
import { BattleData } from 'src/app/types/battle-data';
import { HeroPreview } from 'src/app/types/heroPreview';
import { PowerUp } from 'src/app/types/power-up';

@Component({
  selector: 'app-fight-page',
  templateUrl: './fight-page.component.html',
  styleUrls: ['./fight-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightPageComponent implements OnInit {
  public selectedHero: HeroPreview = DEFAULT_HERO_PREVIEW;
  public randomOpponent: HeroPreview = DEFAULT_HERO_PREVIEW;
  public powerUps: PowerUp[] = this._powerUpsService.powerUps;
  public selectedPowerUps: PowerUp[] = [];
  public isFightInProgress: boolean = false;
  public isBattleResultModalShown: boolean = false;
  public battleData: BattleData = DEFAULT_BATTLE_DATA;

  constructor(
    private _heroHttpService: HeroHttpService,
    private _powerUpsService: PowerUpsService,
    private _battlesDataService: BattlesDataService,
    private _cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._getSelectedHeroFormStorage();
    this._getRandomOpponent();
  }

  private _getSelectedHeroFormStorage(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');

    if (!selectedHeroesAsString) {
      throw new Error('Error on getting selected heroes from local storage!');
    }

    const selectedHeroesAsArray: HeroPreview[] = JSON.parse(selectedHeroesAsString);

    this.selectedHero = selectedHeroesAsArray[selectedHeroesAsArray.length - 1];
  }

  private _getRandomOpponent(): void {
    const randomId: string = this._generateRandomId();

    this._heroHttpService.getHeroPreviewById(randomId)
      .pipe(
        tap((response: HeroPreview) => {
          if (Object.values(response.powerstats).every(value => value !== 'null')) {
            this.randomOpponent = response;
          } else {
            this._getRandomOpponent();
          }
          this._cdRef.markForCheck();
        }),
        catchError((error: unknown) => {
          this._getRandomOpponent();
          this._cdRef.markForCheck();
          return of(error);
        }),
      )
      .subscribe();
  }

  private _generateRandomId(): string {
    const randomNum: number = Math.floor(Math.random() * 100) + 1;

    return randomNum.toString();
  }

  public fight(): void {
    this.isFightInProgress = true;

    setTimeout(() => {
      this.isFightInProgress = false;
      this.battleData = {
        date: new Date(),
        hero: this.selectedHero,
        opponent: this.randomOpponent,
        result: this._generateBattleResult(),
      };
      this._battlesDataService.battlesData = [...this._battlesDataService.battlesData, this.battleData];
      this._powerUpsService.powerUps = this._powerUpsService.powerUps.map(powerUp => {
        if (this.selectedPowerUps.includes(powerUp)) {
          return {
            ...powerUp,
            usesLeft: powerUp.usesLeft - 1,
          }
        }
        return powerUp;
      })
      this.powerUps = this._powerUpsService.powerUps;
      this._hideUnavailablePowerUps();
      this._cdRef.markForCheck();
      this.isBattleResultModalShown = true;
    }, 1000);
  }

  private _hideUnavailablePowerUps(): void {
    this.powerUps = this.powerUps.filter(powerUp => powerUp.usesLeft > 0);
  }

  private _generateBattleResult(): string {
    const possibleBattleResults: string[] = POSSIBLE_BATTLE_RESULTS;
    const randomNum: number = this._getRandomIntFromInterval(0, 2);

    return possibleBattleResults[randomNum];
  }

  private _getRandomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);

  }

  public togglePowerUp(powerUp: PowerUp): void {
    if (this.selectedPowerUps.includes(powerUp)) {
      this.selectedPowerUps = this.selectedPowerUps.filter(selectedPowerUp => selectedPowerUp.title !== powerUp.title);
      this._decreaseHeroStats(powerUp);
    } else {
      this.selectedPowerUps = [...this.selectedPowerUps, powerUp];
      this._increaseHeroStats(powerUp);
    }
  }

  private _increaseHeroStats(powerUp: PowerUp): void {
    const powerUpTitle: string = powerUp.title;
    const incrementPoints: number = 10;

    switch(powerUpTitle) {
      case 'Captain America Shield': {
        const updatedDurability: string = (parseInt(this.selectedHero.powerstats.durability) + incrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            durability: updatedDurability,
          }
        }
        break;
      };

      case 'Mjolnir': {
        const updatedPower: string = (parseInt(this.selectedHero.powerstats.power) + incrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            power: updatedPower,
          }
        }
        break;
      };

      case "Ironman's Nano Armour": {
        const updatedCombat: string = (parseInt(this.selectedHero.powerstats.combat) + incrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            combat: updatedCombat,
          }
        }
        break;
      };

      case "Dr. Strange's cloak": {
        const updatedIntelligence: string = (parseInt(this.selectedHero.powerstats.intelligence) + incrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            intelligence: updatedIntelligence,
          }
        }
        break;
      };

      case "Green Lantern's ring": {
        const updatedStrength: string = (parseInt(this.selectedHero.powerstats.strength) + incrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            strength: updatedStrength,
          }
        }
        break;
      };

      case 'Flash boots': {
        const updatedSpeed: string = (parseInt(this.selectedHero.powerstats.speed) + incrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            speed: updatedSpeed,
          }
        }
        break;
      };

      default: {
        this.selectedHero = this.selectedHero;
      }
    }
  }

  private _decreaseHeroStats(powerUp: PowerUp): void {
    const powerUpTitle: string = powerUp.title;
    const decrementPoints: number = 10;

    switch(powerUpTitle) {
      case 'Captain America Shield': {
        const updatedDurability: string = (parseInt(this.selectedHero.powerstats.durability) - decrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            durability: updatedDurability,
          }
        }
        break;
      };

      case 'Mjolnir': {
        const updatedPower: string = (parseInt(this.selectedHero.powerstats.power) - decrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            power: updatedPower,
          }
        }
        break;
      };

      case "Ironman's Nano Armour": {
        const updatedCombat: string = (parseInt(this.selectedHero.powerstats.combat) - decrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            combat: updatedCombat,
          }
        }
        break;
      };

      case "Dr. Strange's cloak": {
        const updatedIntelligence: string = (parseInt(this.selectedHero.powerstats.intelligence) - decrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            intelligence: updatedIntelligence,
          }
        }
        break;
      };

      case "Green Lantern's ring": {
        const updatedStrength: string = (parseInt(this.selectedHero.powerstats.strength) - decrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            strength: updatedStrength,
          }
        }
        break;
      };

      case 'Flash boots': {
        const updatedSpeed: string = (parseInt(this.selectedHero.powerstats.speed) - decrementPoints).toString();

        this.selectedHero = {
          ...this.selectedHero, 
          powerstats: {
            ...this.selectedHero.powerstats,
            speed: updatedSpeed,
          }
        }
        break;
      };

      default: {
        this.selectedHero = this.selectedHero;
      }
    }
  }

  public closeModal(): void {
    this.isBattleResultModalShown = false;
  }
}
