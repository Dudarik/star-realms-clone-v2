import type { IGameAction } from "./actions";
import { ref, computed, type ComputedRef, type Ref } from "vue";
import type { IGameState } from "./state";

const MAX_HISTORY_COUNT = 40;

export interface IGameHistory {
  gameHistory: ComputedRef<IGameAction[]>;
  currentState: Ref<IGameState>;
  lastHistoryState: ComputedRef<IGameState>;
  makeAction(action: IGameAction): void;
  shiftHistory(): void;
}

export function useGameHistory(gameState: IGameState): IGameHistory {
  const _gameHistory = ref<IGameAction[]>([]);

  const gameHistory = computed(() => {
    return [..._gameHistory.value];
  });

  const currentState = ref<IGameState>(gameState);

  function makeAction(action: IGameAction) {
    _gameHistory.value.push(action);
    if (_gameHistory.value.length > MAX_HISTORY_COUNT) {
      _gameHistory.value.shift();
    }
    if (action.state !== undefined)
      throw new Error("Trying to add already executed action");
    action.invoke(currentState.value);
  }

  const lastHistoryState = computed(() => {
    return _gameHistory.value[0].state ?? currentState.value;
  });

  function shiftHistory() {
    _gameHistory.value.shift();
  }

  return {
    lastHistoryState,
    gameHistory,
    currentState,
    makeAction,
    shiftHistory,
  };
}
