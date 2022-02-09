import { HeroPreview } from "./hero-preview";

export type HeroByIdResponse = HeroPreview | HeroByIdErrorResponse;

export interface HeroByIdErrorResponse {
  response: 'error';
  error: string;
}
