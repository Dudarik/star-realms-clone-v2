import { ICardState } from '@/interfaces/';
import { IPlayerState } from '@/interfaces/';

export const drawCard = () => {};
export const playCard = () => {};
export const deckShuffle = (deck: ICardState[]) => {};
export const discardCard = (card: ICardState) => {};
export const buyCard = (card: ICardState) => {};
export const attack = (power: number, player: IPlayerState) => {};
export const endTurn = () => {};
