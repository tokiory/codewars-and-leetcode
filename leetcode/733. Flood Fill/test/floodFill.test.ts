import { ImageCoordinates, ImageMatrix, ImageXCoordinate, ImageYCoordinate } from "../floodFill.types";
import floodFill from '../solution';

describe('Testing flood fill', () => {
  test('Basic test', () => {
    const TEST_MATRIX = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    const SR = 1;
    const SC = 1;
    const TARGET_COLOR = 2;

    const EXPECTED_MATRIX = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];

    expect(floodFill(TEST_MATRIX, SR, SC, TARGET_COLOR)).toStrictEqual(EXPECTED_MATRIX);
  });

  test('Row test', () => {
    const TEST_MATRIX = [[1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1]];
    const SR = 0;
    const SC = 9;
    const TARGET_COLOR = 2;
    const EXPECTED_MATRIX = [[1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 0, 1, 1, 1]];

    expect(floodFill(TEST_MATRIX, SR, SC, TARGET_COLOR)).toStrictEqual(EXPECTED_MATRIX);
  });
});