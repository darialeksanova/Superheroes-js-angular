import { HeroPreview } from "./heroPreview";

export type HeroByIdResponse = HeroPreview | HeroByIdErrorResponse;

export interface HeroByIdErrorResponse {
  response: 'error';
  error: string;
}
