import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState } from "../state";
import { arrayShuffle } from "@/utils";

export class DeckShuffleAction extends GameAction {
  type = EActionType.DeckShuffle;

  constructor(public target: IPlayerState) {
    super();
  }

  _invoke() {
    this.target.drawPile.push(...this.target.discardPile);
    this.target.drawPile = arrayShuffle(this.target.drawPile);
    this.target.discardPile = [];
  }
}
