export interface HeroFull {
  id: string;
  image: {
    url: string;
  };
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string
  };
  biography: {
    'full-name': string;
    'alter-egos': string;
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string
  };
  work: {
    occupation: string;
    base: string
  };
  connections: {
    "group-affiliation": string;
    relatives: string
  }
}