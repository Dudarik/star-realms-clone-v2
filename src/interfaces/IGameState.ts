import { ICardState } from './ICardState';
import { IPlayerState } from './IPlayerState';

export interface IGameState {
  tradeDeck: ICardState[];
  tradeRow: ICardState[];
  players: IPlayerState[];
  // facePlayer: IPlayerState;
  currentPlayer: IPlayerState;
  // cloneState(): IGameState;
}
