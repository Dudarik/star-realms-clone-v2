import { EFraction } from '@/enums/EFraction';
import type { ICardState } from '@/interfaces/ICardState';

export const cards: ICardState[] = [
  {
    id: 1,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Federation Shuttle',
    cost: 1,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 2,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAuthority',
          value: 4,
        },
      ],
    },

    allyAbilityDone: false,
    pathToSprite: './assets/sprites_webp/desktop/Trade Federation/Federation_Shuttle.webp',
    description: `Fast? This baby doesn't just haul cargo. She hauls...`,
    allAbylityPlayed: false,
    countInGame: 3,
  },

  {
    id: 2,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Cutter',
    cost: 2,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAuthority',
          value: 4,
        },
        {
          name: 'incraseCoins',
          value: 2,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 4,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './assets/sprites_webp/desktop/Trade Federation/Cutter.webp',
    allAbylityPlayed: false,
    countInGame: 3,
  },
  {
    id: 3,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Embassy Yacht',
    cost: 2,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAuthority',
          value: 3,
        },
        {
          name: 'incraseCoins',
          value: 2,
        },
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw one card',
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Embassy_Yacht.webp',
    allAbylityPlayed: false,
    countInGame: 2,
  },
  {
    id: 4,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Freighter',
    cost: 4,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 4,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'putTopCards',
          value: 1,
          description: 'You may put the next ship you acquire this turn on top of your deck',
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Embassy_Yacht.webp',
    allAbylityPlayed: false,
    countInGame: 2,
  },
  {
    id: 4,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Command Ship',
    cost: 8,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAuthority',
          value: 4,
        },
        {
          name: 'incraseAttackPower',
          value: 5,
        },
        {
          name: 'drawCards',
          value: 2,
          description: 'Draw two cards',
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'destroyBase',
          value: 1,
          description: 'You may destroy target base',
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Command_Ship.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 5,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Trade Escort',
    cost: 5,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAuthority',
          value: 4,
        },
        {
          name: 'incraseAttackPower',
          value: 4,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Trade_Escort.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 6,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Flagship',
    cost: 6,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 5,
        },
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAuthority',
          value: 5,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Flagship.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 7,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Trading Post',
    cost: 3,
    primaryAbility: {
      choseOne: true,
      ability: [
        {
          name: 'incraseAuthority',
          value: 1,
        },
        {
          name: 'incraseCoins',
          value: 1,
        },
      ],
    },
    scrapAbilty: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 3,
        },
      ],
    },
    base: {
      isPost: true,
      health: 4,
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Trading_Post.webp',
    allAbylityPlayed: false,
    countInGame: 2,
  },
  {
    id: 8,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Barter World',
    cost: 4,
    primaryAbility: {
      choseOne: true,
      ability: [
        {
          name: 'incraseAuthority',
          value: 2,
        },
        {
          name: 'incraseCoins',
          value: 2,
        },
      ],
    },
    scrapAbilty: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 5,
        },
      ],
    },
    base: {
      isPost: false,
      health: 4,
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Barter_World.webp',
    allAbylityPlayed: false,
    countInGame: 2,
  },
  {
    id: 9,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Defense Center',
    cost: 5,
    primaryAbility: {
      choseOne: true,
      ability: [
        {
          name: 'incraseAuthority',
          value: 3,
        },
        {
          name: 'incraseAttackPower',
          value: 2,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 2,
        },
      ],
    },
    base: {
      isPost: true,
      health: 5,
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Defense_Center.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 10,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Central Office',
    cost: 7,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 2,
        },
        {
          name: 'putTopCards',
          value: 2,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'discardCards',
          value: 1,
        },
      ],
    },
    base: {
      isPost: false,
      health: 6,
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Central_Office.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 11,
    zoneId: 1,
    fraction: EFraction.Trade,
    name: 'Port of Call',
    cost: 6,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 3,
        },
      ],
    },
    scrapAbilty: {
      choseOne: false,
      ability: [
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
        {
          name: 'destroyBase',
          value: 1,
          description: 'You may destroy target base',
        },
      ],
    },
    base: {
      isPost: false,
      health: 6,
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Trade Federation/Port_Of_Call.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },

  {
    id: 100,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Blob Fighter',
    cost: 1,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 3,
          description: '',
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    description: `Either kill it before it signals the hive or run. There are other choices. But none you'll live throug`,
    allyAbilityDone: false,
    pathToSprite: './assets/sprites_webp/desktop/blob/Blob_fighter.webp',
    allAbylityPlayed: false,
    countInGame: 3,
  },
  {
    id: 101,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Trade Pod',
    cost: 2,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 3,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 1,
        },
      ],
    },
    description: `The loading and offloading process is efficient, but disgusting`,
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Trade_Pod.webp',
    allAbylityPlayed: false,
    countInGame: 3,
  },
  {
    id: 102,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Battle Pod',
    cost: 2,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 4,
        },
        {
          name: 'destroyCard',
          value: 0,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 2,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Battle_Pod.webp',
    allAbylityPlayed: false,
    countInGame: 2,
  },
  {
    id: 103,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Ram',
    cost: 2,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 5,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 2,
        },
      ],
    },
    scrapAbilty: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 3,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Ram.webp',
    allAbylityPlayed: false,
    countInGame: 3,
  },
  {
    id: 104,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Blob Destroyer',
    cost: 4,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 6,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'destroyCard',
          value: 1,
          description: 'You may destroy target base or scrap a card in the trade row',
        },
      ],
    },
    description: `When this monstrous ship shows upon colony's sensors, they know the end is near...`,
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Blob_Destroyer.webp',
    allAbylityPlayed: false,
    countInGame: 2,
  },
  {
    id: 105,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Battle Blob',
    cost: 6,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 8,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    scrapAbilty: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 4,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Battle_Blob.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  // {
  //   id: 106,
  //   zoneId: 1,
  //   fraction: EFraction.Blob,
  //   name: 'Blob Carrier',
  //   cost: 6,
  //   primaryAbility: {
  //     choseOne: false,
  //     ability: [
  //       {
  //         name: 'incraseAttackPower',
  //         value: 7,
  //       },
  //     ],
  //   },
  //   allyAbility: {
  //     choseOne: true,
  //     ability: [
  //       {
  //         name: 'destroyCard',
  //         value: 1,
  //         description: 'Acquire any ship without payng its cost and put it on top of your deck.',
  //       },
  //     ],
  //   },
  //   description: `Is that... a whale? - HMS Defender, finsl trnsmission`,
  //   allyAbilityDone: false,
  //   pathToSprite: './src/assets/sprites_webp/desktop/Blob/Ram.webp',
  //   allAbylityPlayed: false,
  //   countInGame: 3,
  // },
  {
    id: 107,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Mothership',
    cost: 7,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 6,
        },
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Mothership.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 108,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Blob Wheel',
    cost: 3,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 1,
        },
      ],
    },
    scrapAbilty: {
      choseOne: false,
      ability: [
        {
          name: 'incraseCoins',
          value: 3,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Blob_Wheel.webp',
    allAbylityPlayed: false,
    countInGame: 3,
  },
  {
    id: 109,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'The Hive',
    cost: 5,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 3,
        },
      ],
    },
    allyAbility: {
      choseOne: false,
      ability: [
        {
          name: 'drawCards',
          value: 1,
          description: 'Draw a card',
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/The_Hive.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
  {
    id: 110,
    zoneId: 1,
    fraction: EFraction.Blob,
    name: 'Blob World',
    cost: 8,
    primaryAbility: {
      choseOne: false,
      ability: [
        {
          name: 'incraseAttackPower',
          value: 5,
        },
        {
          name: 'drawCards',
          value: 2,
        },
      ],
    },
    allyAbilityDone: false,
    pathToSprite: './src/assets/sprites_webp/desktop/Blob/Blob_World.webp',
    allAbylityPlayed: false,
    countInGame: 1,
  },
];
