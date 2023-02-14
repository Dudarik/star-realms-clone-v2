import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState, ICardState, IGameState } from "../state";

export class BuyCardAction extends GameAction {
  type = EActionType.BuyCard;

  constructor(
    public source: IPlayerState,
    public target: ICardState,
    public forFree: boolean
  ) {
    super();
  }

  _invoke(state: IGameState) {
    const index = state.tradeDeck.indexOf(this.target);
    if (!index || index === -1) throw new Error("Card not found!");
    if (!this.forFree) {
      if (this.source.trade <= this.target.cost)
        throw new Error("Not enough trade!");
      else this.source.trade -= this.target.cost;
    }
    state.tradeDeck.splice(index, 1);
    this.source.discardPile.push(this.target);
  }
}
