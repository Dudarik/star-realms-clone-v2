import { IPlayerState } from '@/interfaces';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUsersStore = defineStore('Players', () => {
  const activePlayerId = ref(0);
  const players = ref<IPlayerState[]>([]);

  function setActivePlayer(playerId: number) {
    activePlayerId.value = playerId;
  }

  return { activePlayerId, players, setActivePlayer };
});
