export interface BattleData {
  date: Date;
  hero: {
    id: string;
    name: string
  }
  opponent: {
    id: string;
    name: string
  }
  result: string;
}