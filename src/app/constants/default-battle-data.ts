import { BattleData } from "../types/battle-data";
import { DEFAULT_HERO_PREVIEW } from "./default-hero-preview";

export const DEFAULT_BATTLE_DATA: BattleData = {
  date: new Date(),
  hero: DEFAULT_HERO_PREVIEW,
  opponent: DEFAULT_HERO_PREVIEW,
  result: '',
}