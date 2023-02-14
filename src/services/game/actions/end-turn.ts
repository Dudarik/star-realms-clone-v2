import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState, IGameState } from "../state";

export class EndTurnAction extends GameAction {
  type = EActionType.EndTurn;

  constructor(public source: IPlayerState) {
    super();
  }

  _invoke(state: IGameState) {
    const index = state.players.indexOf(this.source);
    if (index === -1) throw new Error("Player not found!");
    state.currentPlayer.discardPile.push(...state.currentPlayer.playedCards);
    state.currentPlayer.playedCards = [];
  }
}
