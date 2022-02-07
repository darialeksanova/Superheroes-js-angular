import { Component, Input } from '@angular/core';
import { DEFAULT_POWER_UP } from 'src/app/constants/default-power-up';
import { PowerUp } from 'src/app/types/power-up';

@Component({
  selector: 'app-power-up-card',
  templateUrl: './power-up-card.component.html',
  styleUrls: ['./power-up-card.component.scss']
})
export class PowerUpCardComponent {
  @Input() public powerUp: PowerUp = DEFAULT_POWER_UP;
}
