import { ICardState } from '@/interfaces/';
import { IPlayerState } from '@/interfaces/';
import { arrayShuffle } from './helpers';

export interface IAttackTarget {
  card?: ICardState;
  player?: IPlayerState;
}

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
  forFree = false,
  tooTopDeck = false
) => {
  const currentCard = tradeRow.find((card) => card.id === cardId);

  if (!currentCard) throw new Error(`Can't find card with id:${cardId} in trade row`);

  const currentCardArrId = tradeRow.indexOf(currentCard);

  if (!forFree) {
    if (player.tradeCoins <= currentCard.cost) throw new Error(`Not enough coins`);
    else player.tradeCoins -= currentCard.cost;
  }
  tradeRow.splice(currentCardArrId, 1, tradeDeck.pop() as ICardState);

  if (tooTopDeck) player.drawPile.push(currentCard);
  else player.discardPile.push(currentCard);
};

export const playCard = (player: IPlayerState, cardId: number) => {
  const currentCard = player.hand.find((card) => card.id === cardId);
  if (!currentCard) throw new Error(`Can't find card with id ${cardId} in player:${player.name} hand`);

  const currentCardArrId = player.hand.indexOf(currentCard);
  if (currentCardArrId === -1)
    throw new Error(`Can't find card with id: ${currentCard.id} in player ${player.name} hand`);
  player.hand.splice(currentCardArrId, 1);
  player.playedCards.push(currentCard);
  player.playedCardsToRender.push(currentCard);
};

export const discardCard = (player: IPlayerState, cardId: number) => {
  const cardToDiscard = player.hand.find((card) => card.id === cardId);
  if (cardToDiscard === undefined) throw new Error(`Can't find card with id: ${cardId} to discard`);

  player.hand = player.hand.filter((card) => card.id !== cardId);
  player.discardPile.push(cardToDiscard);
};

export const attack = (source: IPlayerState, target: IAttackTarget) => {
  const card = target.card;
  const player = target.player;

  if (!(card && card.base) && !player) throw new Error('No target to attack!');

  if (card && card.base) {
    if (source.combat < card.base.health) throw new Error('Not enough combat to attack!');
    else {
      source.combat -= card.base.health;
      card.base.health = 0;
    }
  } else if (player) {
    player.authority -= source.combat;
    source.combat = 0;
  }
};

export const endTurn = (player: IPlayerState) => {
  //TODO: Надо оптимизировать, плохо проходить два раза фильтром по одному массиву
  const filterBases = (card: ICardState) => Object.prototype.hasOwnProperty.call(card, 'base');
  const ships = player.playedCards.filter((card) => !filterBases(card));

  player.playedCards = player.playedCards.filter(filterBases);
  player.playedCardsToRender = [...player.playedCards];
  player.discardPile.push(...ships);
};

// export const deckShuffle = (deck: ICardState[]) => {};
