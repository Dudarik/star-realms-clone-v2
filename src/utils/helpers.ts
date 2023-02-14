import { ICardState } from '@/interfaces';

export const getRandomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomIdFromArray = (arrayLength: number) => getRandomNum(0, arrayLength - 1);

export function arrayShuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = getRandomIdFromArray(array.length);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const isBase = (card: ICardState) => Object.prototype.hasOwnProperty.call(card, 'base');

export const getIdDamageAbility = (card: ICardState) => {
  if (!Array.isArray(card.primaryAbility))
    throw new Error(`Error. Primary ability on card id: ${card.id} is not array!`);
  return card.primaryAbility.findIndex((ability) => ability.name === 'incraseAttackPower');
};

export const isHaveDamageAbility = (card: ICardState) => {
  if (!Array.isArray(card.primaryAbility)) return false;
  return card.primaryAbility.filter((ability) => ability.name === 'incraseAttackPower').length > 0;
};
