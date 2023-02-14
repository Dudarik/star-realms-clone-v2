import { GameAction } from "./action";
import { EActionType } from "./actions-list";
import type { IPlayerState, ICardState } from "../state";

export interface IAttackTarget {
  card?: ICardState;
  player?: IPlayerState;
}

export class AttackAction extends GameAction {
  type = EActionType.Attack;

  constructor(public source: IPlayerState, public target: IAttackTarget) {
    super();
  }

  _invoke() {
    const card = this.target.card;
    const player = this.target.player;
    if (!(card && card.base) && !player)
      throw new Error("No target to attack!");

    if (card && card.base) {
      if (this.source.combat < card.base.health)
        throw new Error("Not enough combat to attack!");
      else {
        this.source.combat -= card.base.health;
        card.base.health = 0;
      }
    } else if (player) {
      player.authority -= this.source.combat;
      this.source.combat = 0;
    }
  }
}
