export interface BattleInfo {
  battleDate: Date;
  hero: {
    id: string;
    name: string
  }
  opponent: {
    id: string;
    name: string
  }
  battleResult: string;
}