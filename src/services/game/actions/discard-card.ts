import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState, ICardState } from "../state";

export class DiscardCardAction extends GameAction {
  type = EActionType.DiscardCard;

  constructor(public source: IPlayerState, public target: ICardState) {
    super();
  }

  _invoke() {
    const index = this.source.hand.indexOf(this.target);
    if (index === -1) throw new Error("Card not found!");
    this.source.hand.splice(index, 1);
    this.source.discardPile.push(this.target);
  }
}
