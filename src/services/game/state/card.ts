import type { EFraction } from "./fraction";

export interface ICardState {
  id: number;
  fraction: Set<EFraction>;
  description: string;
  name: string;
  cost: number;
  base?: {
    isPost: boolean;
    health: number;
  };
}
