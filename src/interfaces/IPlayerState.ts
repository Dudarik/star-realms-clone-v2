import { ICardState } from './ICardState';

export interface IPlayerState {
  name: string;
  authority: number;
  combat: number;
  trade: number;
  hand: ICardState[];
  discardPile: ICardState[];
  drawPile: ICardState[];
  playedCards: ICardState[];
}
