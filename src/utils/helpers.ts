export const getRandomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomIdFromArray = (arrayLength: number) => getRandomNum(0, arrayLength - 1);

export function arrayShuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = getRandomIdFromArray(array.length);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
