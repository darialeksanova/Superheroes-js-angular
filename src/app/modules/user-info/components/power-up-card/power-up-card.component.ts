import { Component, Input } from '@angular/core';
import { PowerUp } from 'src/app/types/power-up';

@Component({
  selector: 'app-power-up-card',
  templateUrl: './power-up-card.component.html',
  styleUrls: ['./power-up-card.component.scss']
})
export class PowerUpCardComponent {
  @Input() public powerUp: PowerUp = {
    title: '',
    description: '',
    usesLeft: 0,
    img: ''
  }
}
