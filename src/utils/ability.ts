import { ICardState, IPlayerState } from '@/interfaces';
import { drawCard } from './actions';
import { getIdDamageAbility, isBase } from './helpers';

export const ability: Record<
  string,
  (player: IPlayerState, value: number | number[], fromState?: ICardState[]) => void
> = {
  incraseAttackPower: (player, power) => {
    if (typeof power === 'number') player.combat += power;
  },

  incraseAuthority: (player, count) => {
    // увеличиваем authority на count
    if (typeof count === 'number') player.authority += count;
  },

  incraseCoins: (player, count) => {
    // увеличиваем количество монет в ходу на count
    if (typeof count === 'number') player.tradeCoins += count;
  },

  drawCards: (player, count) => {
    //Берем карты
    if (typeof count === 'number')
      for (let i = 0; i < count; i++) {
        drawCard(player);
      }
  },

  destroyBase: (player, targetBaseId) => {
    // уничтожаем выбранную базу
    if (typeof targetBaseId === 'number') {
      const currentBaseArrId = player.playedCards.findIndex((card) => card.id === targetBaseId);

      if (currentBaseArrId === -1) throw new Error(`Can't find base with id: ${targetBaseId} player: ${player.name}`);

      const currentBase = player.playedCards[currentBaseArrId];

      player.discardPile.push(currentBase);

      player.playedCards.splice(currentBaseArrId, 1);
    }
  },

  setDiscardCards: (player, count) => {
    // Выбранный игрок сбрасывает count карт в discardPile
    // Устанавливаем значение противнику.
    if (typeof count === 'number') player.countCardsToDiscard = count;
  },

  discardCards: (player, cardsIds) => {
    if (Array.isArray(cardsIds)) {
      for (let i = 0; i < cardsIds.length; i++) {
        const currentCard = player.hand.pop();
        if (currentCard !== undefined) player.discardPile.push(currentCard);
      }
    }
  },

  discardDrawCards: (player, cardsIds) => {
    if (Array.isArray(cardsIds) && cardsIds.length > 0) {
      ability.discardCards(player, cardsIds);
      ability.drawCards(player, cardsIds.length);
    }
  },

  scrapDrawCards: (player, cardsIds, fromState?: ICardState[]) => {
    if (Array.isArray(cardsIds)) {
      for (const cardId of cardsIds) {
        ability.destroyCard(player, cardId, fromState);
      }
      ability.drawCards(player, cardsIds.length);
    }
  },

  drawScrapCardsFromHand: (player, cardId) => {
    if (typeof cardId === 'number') {
      ability.drawCards(player, 1);

      ability.destroyCard(player, cardId, player.hand);
    }
  },

  destroyCard: (player, cardId, fromState?: ICardState[]) => {
    //Уничтожаем карту из руки, стопки сброса или торгового ряда
    if (typeof cardId === 'number' && fromState) fromState = fromState.filter((card) => cardId !== card.id);
  },

  shipsIncraseAttack: (player, incrasePower) => {
    /*увеличиваем атаку корбалей на incrasePower*/
    if (typeof incrasePower === 'number') {
      player.playedCardsToRender.forEach((card) => {
        if (!isBase(card)) {
          const targetId = getIdDamageAbility(card);
          if (targetId !== -1 && Array.isArray(card.primaryAbility)) {
            (card.primaryAbility[targetId].value as number) += incrasePower;
          }
        }
      });
    }
  },

  putTopCards: (player, count) => {
    //Можете положить следующий купленный корабль(count),поверх вашей стопки сброса
    if (typeof count === 'number')
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
