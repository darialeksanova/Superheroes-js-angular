import { HeroPreview } from "../types/hero-preview";

export const DEFAULT_HERO_PREVIEW: HeroPreview = {
  response: "success",
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
}