export interface HeroPreview {
  response: "success";
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
  }
}