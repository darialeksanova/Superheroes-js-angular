import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  
  @Input() hero: Hero = {
    id: '',
    image: {
      url: ''
    },
    name: '',
    powerstats: {
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    }
  };
}
