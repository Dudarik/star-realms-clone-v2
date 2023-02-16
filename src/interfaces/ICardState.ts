import { EFraction } from '@/enums/EFraction';

export interface Ability {
  name: string;
  value?: number;
  description?: string;
}

export interface ICardState {
  id: number;
  zoneId: number;
  fraction: EFraction;
  // Abilitys - можно использовать енум или массив
  // первичное свойство, например, дает деньги, жизни или урон.
  primaryAbility?: Ability[];
  // вторичное свойство, обычно описано под первичным на карте, например - можете сбросить карту
  // secondaryAbility?: Ability[];
  // союзное свойство, работает, когда сыграл две карты одной фракции или больше.
  allyAbility?: Ability[];
  allyAbilityDone: boolean;
  //Потому как, на одной карте может быть просто союзное свойство и двойное союзное свойство
  // doubleAllyAbility?: [];
  // утилизационное ствойство, работает когда отправлешь карту в утиль(выходит из игры)
  scrapAbilty?: Ability[];
  // художественное описание карты, присутствует на некоторых картах.
  description?: string;
  name: string;
  cost: number;
  base?: {
    isPost: boolean;
    health: number;
  };
  pathToSprite: string;
  allAbylityPlayed: boolean;
}
