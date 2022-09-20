import maxAreaOfIsland from "../solution";
import { Matrix, MatrixCell } from '../island.types';

describe('Testing island search', () => {
  test('Basic leetcode test', () => {
    const TEST_MATRIX: Matrix<MatrixCell> = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ];
    const EXPECTED_LENGTH = 6;
    expect(maxAreaOfIsland(TEST_MATRIX)).toBe(6);
  });

  test('Another leetcode test', () => {
    const TEST_MATRIX: Matrix<MatrixCell> = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1],
    ];
    const EXPECTED_LENGTH = 4;
    expect(maxAreaOfIsland(TEST_MATRIX)).toBe(EXPECTED_LENGTH);
  })
});