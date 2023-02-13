import { ICardState } from './ICardState';

export interface IPlayerState {
  name: string;
  authority: number;
  combat: number;
  tradeCoins: number;
  hand: ICardState[];
  discardPile: ICardState[];
  drawPile: ICardState[];
  playedCards: ICardState[];
}
