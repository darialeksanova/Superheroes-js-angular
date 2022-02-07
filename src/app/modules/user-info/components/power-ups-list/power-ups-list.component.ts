import { Component, OnInit } from '@angular/core';
import { POWER_UPS_LIST } from 'src/app/constants/power-ups-list';
import { PowerUp } from 'src/app/types/power-up';

@Component({
  selector: 'app-power-ups-list',
  templateUrl: './power-ups-list.component.html',
  styleUrls: ['./power-ups-list.component.scss']
})
export class PowerUpsListComponent implements OnInit {
  public powerUps: PowerUp[] = POWER_UPS_LIST;

  public ngOnInit(): void {
    this._sortPowerUps();
  }

  private _sortPowerUps(): void {
    this.powerUps = [...this.powerUps].sort((powerUp1, powerUp2) => {
      return powerUp1.usesLeft < powerUp2.usesLeft ? 1 : -1;
    });
  }
}