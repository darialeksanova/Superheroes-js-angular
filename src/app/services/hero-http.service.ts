import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from "../constants/api-base-url";
import { Hero } from "../types/hero";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HeroHttpService {

  constructor(
    private _http: HttpClient
  ) {}

  public getHeroesByName(name: string): Observable<HeroByNameResponse> {
    return this._http.get<HeroByNameResponse>(`${API_BASE_URL}/search/${name}`);
  }
}

type HeroByNameResponse = {
  response: string;
  results: Array<Hero>;
}