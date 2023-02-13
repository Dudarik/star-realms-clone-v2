import { EFraction } from '@/enums/EFraction';

export interface ICardState {
  id: number;
  fraction: Set<EFraction>;
  // Abilitys - можно использовать енум или массив
  // первичное свойство, например, дает деньги, жизни или урон.
  primaryAbility?: Set<Ability>;
  // вторичное свойство, обычно описано под первичным на карте, например - можете сбросить карту
  secondaryAbility?: Set<Ability>;
  // союзное свойство, работает, когда сыграл две карты одной фракции или больше.
  allyAbility?: Set<Ability>;
  //Потому как, на одной карте может быть просто союзное свойство и двойное союзное свойство
  doubleAllyAbility?: Set<Ability>;
  // утилизационное ствойство, работает когда отправлешь карту в утиль(выходит из игры)
  scrapAbilty?: Set<Ability>;
  // художественное описание карты, присутствует на некоторых картах.
  description?: string;
  name: string;
  cost: number;
  base?: {
    isPost: boolean;
    health: number;
  };
}
