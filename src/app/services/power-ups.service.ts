import { Injectable } from "@angular/core";
import { PowerUp } from "../types/power-up";

const POWER_UPS_LIST: PowerUp[] = [
  {
    title: 'Captain America Shield',
    description: 'Durability +10',
    usesLeft: 5,
    img: 'assets/img/Captain-America-Shield.png'
  },
  {
    title: 'Mjolnir',
    description: 'Power +10',
    usesLeft: 5,
    img: 'assets/img/Mjolnir.png'
  },
  {
    title: "Ironman's Nano Armour",
    description: 'Combat +10',
    usesLeft: 5,
    img: 'assets/img/ironmans-nano-armour.png'
  },
  {
    title: "Dr. Strange's cloak",
    description: 'Intelligence +10',
    usesLeft: 5,
    img: 'assets/img/doctor-strange-cloak.png'
  },
  {
    title: "Green Lantern's ring",
    description: 'Strength +10',
    usesLeft: 5,
    img: 'assets/img/green-lantern-ring.png'
  },
  {
    title: 'Flash boots',
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