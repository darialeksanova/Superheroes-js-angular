import { Hero } from "./hero";

export type HeroByNameResponse = HeroByNameSuccessResponse | HeroByNameErrorResponse;

export interface HeroByNameSuccessResponse {
  response: 'success';
  results: Array<Hero>;
}

export interface HeroByNameErrorResponse {
  response: 'error';
  error: string;
}