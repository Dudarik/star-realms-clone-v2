import { ICardState } from '@/interfaces/ICardState';
import { IPlayerState } from '@/interfaces/IPlayerState';

export const drawCard = () => {};
export const playCard = () => {};
export const deckShuffle = (deck: ICardState[]) => {};
export const discardCard = (card: ICardState) => {};
export const buyCard = (card: ICardState) => {};
export const attack = (power: number, player: IPlayerState) => {};
export const endTurn = () => {};
