type FincraseAttackPower = (power: number) => void;
// const ability = {
//   //базовые Абилки, вроде бы все описал, по крайней мере в базовой игре
//   incraseAttackPower: (power: number) => {//incrase attack power на power};
//   incraseAuthority: (target: Player, count: number) => {// увеличиваем authority на count};
//   incraseCoins: (count: number) => {// увеличиваем количество монет в ходу на count};
//   drawCards: (count: number) => {//Берем карты }
//   destroyBase: (targetCardId: number[], ) => {// уничтожаем выбранную базу}
//   discardCard: (target: Player, count: number) => {// Выбранный игрок сбрасывает count карт в discardPile}
//   destroyCard: (from: Hand | DiscardPile | TradeDeck, cardsId: number[]) => {//Убираем карту из руки, стопки сброса или торгового ряда}
//   copyCard: (targetCardId: number) => {// копируем сыгранную карту}
//   shipsIncraseAttack: (shipsId: number[], incrasePower: number) => {//увеличиваем аттаку корбалей на incrasePower}
//   buyShipPutTop: (shipId: number) => {//Кладем поверх drawPile}

//   //Далее их можно комбинировать вот так
//   incraseAttackPowerAndIncraseAuthority: => {this.incraseAttackPower() && this.incraseAuthority()}
//   incraseCoinsOrIncraseAuthority:() => {this.incraseCoins() || this.incraseAuthority()}
//   incraseCoinsIncraseAuthority:() => {this.incraseCoins() && this.incraseAuthority()}
// }
