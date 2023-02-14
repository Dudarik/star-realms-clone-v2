import { EFraction } from '@/enums/EFraction';
import { ICardState } from '@/interfaces';

export const cards: ICardState[] = [
  {
    id: 1,
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
    pathToSprite: './assets/sprites_webp/desktop/Trade Federation/Federation_Shuttle.webp',
    description: `Fast? This baby doesn't just haul cargo. She hauls...`,
    allAbylityPlayed: false,
  },

  {
    id: 2,
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
    pathToSprite: './assets/sprites_webp/desktop/Trade Federation/Cutter.webp',
    allAbylityPlayed: false,
  },

  {
    id: 100,
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
    pathToSprite: './assets/sprites_webp/desktop/blob/Blob_fighter.webp',
    allAbylityPlayed: false,
  },
];
