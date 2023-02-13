import { ICardState } from '@/interfaces/';
import { IPlayerState } from '@/interfaces/';
import { arrayShuffle } from './helpers';

export const drawCard = (player: IPlayerState) => {
  if (player.drawPile.length === 0) createNewPlayerDeck(player);

  player.hand.push(player.drawPile.pop() as ICardState);
};

export const createNewPlayerDeck = (player: IPlayerState) => {
  player.drawPile.push(...arrayShuffle(player.discardPile));
  player.discardPile = [];
};

export const buyCard = (
  tradeDeck: ICardState[],
  tradeRow: ICardState[],
  player: IPlayerState,
  cardId: number,
  forFree: boolean
) => {
  const currentCard = tradeRow.find((card) => card.id === cardId);

  if (!currentCard) throw new Error(`Can't find card with id:${cardId} in trade row`);

  const currentCardArrId = tradeRow.indexOf(currentCard);

  if (!forFree) {
    if (player.tradeCoins <= currentCard.cost) throw new Error(`Not enough coins`);
    else player.tradeCoins -= currentCard.cost;
  }
  tradeRow.splice(currentCardArrId, 1, tradeDeck.pop() as ICardState);

  player.discardPile.push(currentCard);
};

export const playCard = () => {};

export const discardCard = (player: IPlayerState, cardId: number) => {
  const cardToDiscard = player.hand.find((card) => card.id === cardId);
  if (cardToDiscard === undefined) throw new Error(`Can't find card with id: ${cardId} to discard`);

  player.hand = player.hand.filter((card) => card.id !== cardId);
  player.discardPile.push(cardToDiscard);
};

export const attack = (power: number, player: IPlayerState) => {};
export const endTurn = () => {};

// export const deckShuffle = (deck: ICardState[]) => {};
