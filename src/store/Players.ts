import { IPlayerState } from '@/interfaces';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUsersStore = defineStore('Players', () => {
  const players = ref<IPlayerState[]>([]);
});
