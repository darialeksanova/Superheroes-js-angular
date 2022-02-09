import { Injectable } from "@angular/core";
import { BattleData } from "../types/battle-data";

@Injectable({ providedIn: 'root' })
export class BattlesDataService {
  private _battlesData: BattleData[] = [];

  public get battlesData(): BattleData[] {
    return this._battlesData;
  }

  public set battlesData(updatedBattlesData: BattleData[]) {
    this._battlesData = updatedBattlesData;
  }
}