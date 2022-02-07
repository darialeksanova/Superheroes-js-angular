import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from "../constants/api-base-url";
import { map, Observable } from "rxjs";
import { HeroByNameResponse, HeroByNameSuccessResponse } from "../types/hero-by-name-response";

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
}