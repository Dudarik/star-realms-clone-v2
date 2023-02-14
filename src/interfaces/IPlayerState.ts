import { ICardState } from './ICardState';

export interface IPlayerState {
  name: string;
  authority: number;
  combat: number;
  tradeCoins: number;
  countCardsToDiscard: number;
  incraseShipsAttack: number;
  hand: ICardState[];
  discardPile: ICardState[];
  drawPile: ICardState[];
  playedCards: ICardState[];
  playedCardsToRender: ICardState[];
}
