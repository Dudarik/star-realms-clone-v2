import type { IGameState } from "../state";
import type { EActionType } from "./actions-list";

export interface IGameActionInfo {
  type: EActionType;
  state?: IGameState;
}

export interface IGameAction extends IGameActionInfo {
  invoke(state: IGameState): void;
}

export abstract class GameAction implements IGameAction {
  abstract type: EActionType;
  state?: IGameState;
  protected abstract _invoke(state: IGameState): void;

  invoke(state: IGameState) {
    if (this.state !== undefined)
      throw new Error("Calling executed action is not allowed!");
    this.state = state.cloneState();
    this._invoke(state);
  }
}
