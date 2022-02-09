import { PowerUpTitle } from "../constants/power-up-title";

export interface PowerUp {
  title: PowerUpTitle;
  description: string;
  usesLeft: number;
  img: string;
}