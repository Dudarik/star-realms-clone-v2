import { ICardState } from '@/interfaces';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerCardsStore = defineStore('PlayerCards', () => {
  const playerId = ref(0);
  const drawDeck = ref<ICardState[]>([]);
  const discardPile = ref<ICardState[]>([]);
  const playerHand = ref<ICardState[]>([]);
});
