import { EFraction } from '@/enums/EFraction';
import type { ICardState } from '@/interfaces/ICardState';

export const cards: ICardState[] = [
  {
    id: 1,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Federation Shuttle',
    cost: 1,
    primaryAbility: [
      {
        name: 'incraseCoins',
        value: 2,
      },
    ],
    allyAbility: [
      {
        name: 'incraseAuthority',
        value: 4,
      },
    ],
    allyAbilityDone: false,
    pathToSprite: './assets/sprites_webp/desktop/Trade Federation/Federation_Shuttle.webp',
    description: `Fast? This baby doesn't just haul cargo. She hauls...`,
    allAbylityPlayed: false,
  },

  {
    id: 2,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Cutter',
    cost: 2,
    primaryAbility: [
      {
        name: 'incraseAuthority',
        value: 4,
      },
      {
        name: 'incraseCoins',
        value: 2,
      },
    ],
    allyAbility: [
      {
        name: 'incraseAttackPower',
        value: 4,
      },
    ],
    allyAbilityDone: false,
    pathToSprite: './assets/sprites_webp/desktop/Trade Federation/Cutter.webp',
    allAbylityPlayed: false,
  },

  {
    id: 100,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Blob Fighter',
    cost: 1,
    primaryAbility: [
      {
        name: 'incraseAttackPower',
        value: 3,
        description: '',
      },
    ],
    allyAbility: [
      {
        name: 'drawCards',
        value: 1,
        description: 'Draw a card',
      },
    ],
    allyAbilityDone: false,
    pathToSprite: './assets/sprites_webp/desktop/blob/Blob_fighter.webp',
    allAbylityPlayed: false,
  },
];
