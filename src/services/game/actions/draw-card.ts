import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState, ICardState } from "../state";

export class DrawCardAction extends GameAction {
  type = EActionType.DrawCard;

  constructor(public target: IPlayerState) {
    super();
  }

  _invoke() {
    if (this.target.drawPile.length === 0)
      throw new Error("Draw pile is empty!");
    this.target.hand.push(this.target.drawPile.pop() as ICardState);
  }
}
