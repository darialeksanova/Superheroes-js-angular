import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PowerUpsService } from 'src/app/services/power-ups.service';
import { PowerUp } from 'src/app/types/power-up';

@Component({
  selector: 'app-power-ups-list',
  templateUrl: './power-ups-list.component.html',
  styleUrls: ['./power-ups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PowerUpsListComponent implements OnInit {
  public powerUps: PowerUp[] = this._powerUpsService.powerUps;

  constructor(private _powerUpsService: PowerUpsService) {}

  public ngOnInit(): void {
    this._sortPowerUps();
  }

  private _sortPowerUps(): void {
    this.powerUps = [...this.powerUps].sort((powerUp1, powerUp2) => {
      return powerUp1.usesLeft < powerUp2.usesLeft ? 1 : -1;
    });
  }
}