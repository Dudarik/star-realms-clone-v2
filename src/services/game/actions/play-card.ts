import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState, ICardState } from "../state";

export class PlayCardAction extends GameAction {
  type = EActionType.PlayCard;

  constructor(public source: IPlayerState, public target: ICardState) {
    super();
  }

  _invoke() {
    const index = this.source.hand.indexOf(this.target);
    if (index === -1) throw new Error("Card not found in hand!");
    this.source.hand.splice(index, 1);
    this.source.playedCards.push(this.target);
  }
}
