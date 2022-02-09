import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from "../constants/api-base-url";
import { map, Observable } from "rxjs";
import { HeroFull } from "../types/hero-full";
import { HeroPreview } from "../types/hero-preview";
import { HeroByNameResponse, HeroByNameSuccessResponse } from "../types/hero-by-name-response";
import { HeroByIdResponse } from "../types/hero-by-id-response";

@Injectable({ providedIn: 'root' })
export class HeroHttpService {

  constructor(
    private _http: HttpClient
  ) {}

  public getHeroesByName(name: string): Observable<HeroByNameSuccessResponse> {
    return this._http.get<HeroByNameResponse>(`${API_BASE_URL}/search/${name}`)
      .pipe(
        map((response: HeroByNameResponse) => {
          if (response.response === 'error') {
            throw response;
          } 

          return response;
        }));
  }

  public getFullHeroInfoById(id: string): Observable<HeroFull> {
    return this._http.get<HeroFull>(`${API_BASE_URL}/${id}`);
  }

  public getHeroPreviewById(id: string): Observable<HeroPreview> {
    return this._http.get<HeroByIdResponse>(`${API_BASE_URL}/${id}`)
      .pipe(
        map((response: HeroByIdResponse) => {
          if (response.response === 'error') {
            throw response;
          }

          return response;
        }),
      );
  }
}
