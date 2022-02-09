import { HeroFull } from "../types/hero-full";

export const DEFAULT_HERO_FULL: HeroFull = {
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
  },
  biography: {
    'full-name': '',
    'alter-egos': '',
    'place-of-birth': '',
    'first-appearance': '',
    publisher: '',
    alignment: ''
  },
  appearance: {
    gender: '',
    race: '',
    height: [''],
    weight: [''],
    "eye-color": '',
    "hair-color": ''
  },
  work: {
    occupation: '',
    base: ''
  },
  connections: {
    "group-affiliation": '',
    relatives: ''
  }
}