import { Injectable } from "@angular/core";
import { PowerUpTitle } from "../constants/power-up-title";
import { PowerUp } from "../types/power-up";

const POWER_UPS_LIST: PowerUp[] = [
  {
    title: PowerUpTitle.CAPITAN_AMERICA_SHIELD,
    description: 'Durability +10',
    usesLeft: 5,
    img: 'assets/img/Captain-America-Shield.png'
  },
  {
    title: PowerUpTitle.MJOLNIR,
    description: 'Power +10',
    usesLeft: 5,
    img: 'assets/img/Mjolnir.png'
  },
  {
    title: PowerUpTitle.IRONMAN_NANO_ARMOUR,
    description: 'Combat +10',
    usesLeft: 5,
    img: 'assets/img/ironmans-nano-armour.png'
  },
  {
    title: PowerUpTitle.DR_STRANGE_CLOAK,
    description: 'Intelligence +10',
    usesLeft: 5,
    img: 'assets/img/doctor-strange-cloak.png'
  },
  {
    title: PowerUpTitle.GREEN_LANTERN_RING,
    description: 'Strength +10',
    usesLeft: 5,
    img: 'assets/img/green-lantern-ring.png'
  },
  {
    title: PowerUpTitle.FLASH_BOOTS,
    description: 'Speed +10',
    usesLeft: 5,
    img: 'assets/img/flash-boots.png'
  }
];

@Injectable({ providedIn: 'root' })
export class PowerUpsService {
  private _powerUps: PowerUp[] = POWER_UPS_LIST;

  public get powerUps(): PowerUp[] {
    return this._powerUps;
  }

  public set powerUps(updatedPowerUps: PowerUp[]) {
    this._powerUps = updatedPowerUps;
  }
}