// Данное решение не работает, но в его основу заложен бинарный поиск
// Я решил его оставить, для того чтобы потом возможно доработать
// Данное решение не работает только с большими массивами.

import { ONE_ARRAY } from "./test/bigArray";

export function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const difference = target - numbers[i];
    const numbersWithoutCurrent = numbers.filter(item => item !== numbers[i]);
    const differenceIndex = binarySearch(numbersWithoutCurrent, difference);

    if (differenceIndex !== -1) {

      // Тут во втором прибавляем +2 потому что мы ранее удалили элемент из массива и должны отдать порядковый номер, а не индекс
      return [
        i + 1,
        differenceIndex + (numbers.length - numbersWithoutCurrent.length) + 1,
      ];
    }
  }

  return [-1, -1];
};

function binarySearch(numbers: number[], target: number): number {
  let start = 0;
  let end = numbers.length - 1;

  while(start <= end) {

    const half = Math.floor((start + end) / 2);

    if (numbers[half] === target) return half;

    if (numbers[half] > target) {
      end = half - 1;
      continue;
    }

    start = half + 1;
  }
  return -1;
}

twoSum(ONE_ARRAY, 6);