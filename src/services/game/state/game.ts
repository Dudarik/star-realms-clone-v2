import type { ICardState } from "./card";
import type { IPlayerState } from "./player";

export interface IGameState {
  tradeDeck: ICardState[];
  players: IPlayerState[];
  facePlayer: IPlayerState;
  currentPlayer: IPlayerState;
  cloneState(): IGameState;
}
