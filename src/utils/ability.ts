import { ICardState, IPlayerState } from '@/interfaces';
import { buyCard, drawCard } from './actions';
import { getIdDamageAbility, isBase } from './helpers';

export const ability = {
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

  destroyCard: (fromState: ICardState[], cardsIds: number[]) => {
    //Убираем карту из руки, стопки сброса или торгового ряда
    for (let i = 0; i < cardsIds.length; i++) {
      fromState = fromState.filter((card) => !cardsIds.includes(card.id));
    }
  },

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

  buyCardPutTop: (
    tradeDeck: ICardState[],
    tradeRow: ICardState[],
    player: IPlayerState,
    cardId: number,
    forFree = false,
    tooTopDeck = true
  ) => {
    //Кладем поверх drawPile
    buyCard(tradeDeck, tradeRow, player, cardId, forFree, tooTopDeck);
  },
};

// export const copyCard = (targetCard: ICardState) => {
//   /* копируем сыгранную карту*/
//   //TODO: Пока не будем делать, там всего один корабль с такой абилкой.
// };
