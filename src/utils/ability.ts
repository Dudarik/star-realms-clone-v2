import { ICardState, IPlayerState } from '@/interfaces';
import { drawCard } from './actions';
import { getIdDamageAbility, isBase } from './helpers';

export const ability: Record<string, (player: IPlayerState, value: number) => void> = {
  incraseAttackPower: (player: IPlayerState, power: number) => {
    player.combat += power;
  },

  incraseAuthority: (player: IPlayerState, count: number) => {
    // увеличиваем authority на count
    player.authority += count;
  },

  incraseCoins: (player: IPlayerState, count: number) => {
    // увеличиваем количество монет в ходу на count
    player.tradeCoins += count;
  },

  drawCards: (player: IPlayerState, count: number) => {
    //Берем карты
    for (let i = 0; i < count; i++) {
      drawCard(player);
    }
  },

  destroyBase: (player: IPlayerState, targetBaseId: number) => {
    // уничтожаем выбранную базу
    const currentBaseArrId = player.playedCards.findIndex((card) => card.id === targetBaseId);

    if (currentBaseArrId === -1) throw new Error(`Can't find base with id: ${targetBaseId} player: ${player.name}`);

    const currentBase = player.playedCards[currentBaseArrId];

    player.discardPile.push(currentBase);

    player.playedCards.splice(currentBaseArrId, 1);
  },

  discardCards: (player: IPlayerState, count: number) => {
    // Выбранный игрок сбрасывает count карт в discardPile
    player.countCardsToDiscard = count;
  },

  destroyCard: (player: IPlayerState, cardId: number, fromState?: ICardState[]) => {
    //Уничтожаем карту из руки, стопки сброса или торгового ряда
    if (fromState) fromState = fromState.filter((card) => cardId !== card.id);
  },

  // destroyCard2: (player: IPlayerState, cardId: number) => {

  // },
  shipsIncraseAttack: (player: IPlayerState, incrasePower: number) => {
    /*увеличиваем атаку корбалей на incrasePower*/
    player.playedCardsToRender.forEach((card) => {
      if (!isBase(card)) {
        const targetId = getIdDamageAbility(card);
        if (targetId !== -1 && Array.isArray(card.primaryAbility)) {
          (card.primaryAbility[targetId].value as number) += incrasePower;
        }
      }
    });
  },

  putTopCards: (player: IPlayerState, count: number) => {
    //Можете положить следующий купленный корабль(count),поверх вашей стопки сброса
    for (let i = 0; i < count; i++) {
      player.drawPile.push(player.discardPile.pop() as ICardState);
    }
  },

  // buyFree: (player: IPlayerState, count: number) => {
  //   buyCard()
  // }

  // buyCardPutTop: (
  //   tradeDeck: ICardState[],
  //   tradeRow: ICardState[],
  //   player: IPlayerState,
  //   cardId: number,
  //   forFree = false,
  //   tooTopDeck = true
  // ) => {
  //   //Кладем поверх drawPile
  //   buyCard(tradeDeck, tradeRow, player, cardId, forFree, tooTopDeck);
  // },
};

// export const copyCard = (targetCard: ICardState) => {
//   /* копируем сыгранную карту*/
//   //TODO: Пока не будем делать, там всего один корабль с такой абилкой.
// };
