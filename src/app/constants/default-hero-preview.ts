import { HeroPreview } from "../types/heroPreview";

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