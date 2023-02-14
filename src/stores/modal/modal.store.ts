import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { validationInfo, CardService, cardImages } from './_constants';

export const useModal = defineStore("Modal", () => {
  const modalIsShow = ref(false);
  const buyAttemt = ref(false);
  const orderIsCompleted = ref(false);

  return {
    modalIsShow,
    buyAttemt,
    orderIsCompleted,
  };
});
