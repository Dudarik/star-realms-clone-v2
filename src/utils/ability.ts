import { ICardState, IPlayerState } from '@/interfaces';
import { buyCard, discardCard, drawCard } from './actions';

export const incraseAttackPower = (player: IPlayerState, power: number) => {
  //incrase attack power на power
  player.combat += power;
};

export const incraseAuthority = (player: IPlayerState, count: number) => {
  // увеличиваем authority на count
  player.authority += count;
};

export const incraseCoins = (player: IPlayerState, count: number) => {
  // увеличиваем количество монет в ходу на count
  player.tradeCoins += count;
};

export const drawCards = (player: IPlayerState, count: number) => {
  //Берем карты
  for (let i = 0; i < count; i++) {
    drawCard(player);
  }
};

export const destroyBase = (player: IPlayerState, targetBaseId: number) => {
  // уничтожаем выбранную базу
  const currentBaseArrId = player.playedCards.findIndex((card) => card.id === targetBaseId);

  if (currentBaseArrId === -1) throw new Error(`Can't find base with id: ${targetBaseId} player: ${player.name}`);

  const currentBase = player.playedCards[currentBaseArrId];

  player.discardPile.push(currentBase);

  player.playedCards.splice(currentBaseArrId, 1);
};

export const discardCards = (player: IPlayerState, count: number) => {
  // Выбранный игрок сбрасывает count карт в discardPile
  player.countCardsToDiscard = count;
};

export const destroyCard = (fromState: ICardState[], cardsIds: number[]) => {
  //Убираем карту из руки, стопки сброса или торгового ряда
  for (let i = 0; i < cardsIds.length; i++) {
    fromState = fromState.filter((card) => !cardsIds.includes(card.id));
  }
};

export const copyCard = (targetCard: ICardState) => {
  /* копируем сыгранную карту*/
  //TODO: Пока не будем делать, там всего один корабль с такой абилкой.
};
export const shipsIncraseAttack = (player: IPlayerState, incrasePower: number) => {
  /*увеличиваем атаку корбалей на incrasePower*/
  for (let i = 0; i < player.playedCards.length; i++) {
    //TODO: Пока не будем делать, там всего одна база с такой абилкой.
  }
};

export const buyShipPutTop = (
  tradeDeck: ICardState[],
  tradeRow: ICardState[],
  player: IPlayerState,
  cardId: number,
  forFree = false,
  tooTopDeck = true
) => {
  //Кладем поверх drawPile
  buyCard(tradeDeck, tradeRow, player, cardId, forFree, tooTopDeck);
};

//   //Далее их можно комбинировать вот так
//   incraseAttackPowerAndIncraseAuthority: => {this.incraseAttackPower() && this.incraseAuthority()}
//   incraseCoinsOrIncraseAuthority:() => {this.incraseCoins() || this.incraseAuthority()}
//   incraseCoinsIncraseAuthority:() => {this.incraseCoins() && this.incraseAuthority()}
