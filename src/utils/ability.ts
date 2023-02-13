export const incraseAttackPower = (power: number) => {//incrase attack power на power};
export const incraseAuthority = (target: Player, count: number) => {// увеличиваем authority на count};
export const incraseCoins = (count: number) => {// увеличиваем количество монет в ходу на count};
export const drawCards = (count: number) => {//Берем карты }
export const destroyBase = (targetCardId: number[], ) => {// уничтожаем выбранную базу}
export const discardCard=  (target: Player, count: number) => {// Выбранный игрок сбрасывает count карт в discardPile}
export const destroyCard = (from: Hand | DiscardPile | tradeRow, cardsId: number[]) => {//Убираем карту из руки, стопки сброса или торгового ряда}
export const copyCard = (targetCardId: number) => {// копируем сыгранную карту}
export const shipsIncraseAttack = (shipsId: number[], incrasePower: number) => {//увеличиваем аттаку корбалей на incrasePower}
export const buyShipPutTop = (shipId: number) => {//Кладем поверх drawPile}

//   //Далее их можно комбинировать вот так
//   incraseAttackPowerAndIncraseAuthority: => {this.incraseAttackPower() && this.incraseAuthority()}
//   incraseCoinsOrIncraseAuthority:() => {this.incraseCoins() || this.incraseAuthority()}
//   incraseCoinsIncraseAuthority:() => {this.incraseCoins() && this.incraseAuthority()}