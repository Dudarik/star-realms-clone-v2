import { ICardState } from '@/interfaces';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTradeDeckStore = defineStore('TradeDeck', () => {
  const tradeDeck = ref<ICardState[]>([]);
  const tradeRow = ref<ICardState[]>([]);
});
