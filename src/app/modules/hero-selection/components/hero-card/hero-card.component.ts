import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  
  @Input() public hero: Hero = {
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
  @ViewChild('selectHeroButton') selectHeroButtonRef!: ElementRef;

  public isHeroSelected: boolean = false;

  public ngOnInit(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');
    
    if (!selectedHeroesAsString) {
      return;
    }

    const selectedHeroesAsArray: Hero[] = JSON.parse(selectedHeroesAsString);
    
    if(selectedHeroesAsArray.some(selectedHero => selectedHero.id === this.hero.id)) {
      this.isHeroSelected = true;
    }
  }

  public setDefaultHeroImage(hero: Hero): void {
    hero.image.url = '/assets/img/superhero-default-img.jpeg';
  }

  public selectHero(): void {
    const selectedHeroesAsString: string | null = localStorage.getItem('selectedHeroes');

    if (!selectedHeroesAsString) {
      localStorage.setItem('selectedHeroes', JSON.stringify([this.hero]));
      this.isHeroSelected = true;
      return;
    }

    const selectedHeroesAsArray: Hero[] = JSON.parse(selectedHeroesAsString);

    localStorage.setItem('selectedHeroes', JSON.stringify([...selectedHeroesAsArray, this.hero]));
    this.isHeroSelected = true;
  }
}
