import { HeroPreview } from "./heroPreview";

export type HeroByNameResponse = HeroByNameSuccessResponse | HeroByNameErrorResponse;

export interface HeroByNameSuccessResponse {
  response: 'success';
  results: Array<HeroPreview>;
}

export interface HeroByNameErrorResponse {
  response: 'error';
  error: string;
}