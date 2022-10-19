import spiralMatrix from '../solution';
describe('Spiral matrix', () => {
  test('Basic test', () => {
    const sourceArr: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
    const expectArr: number[] = [1,2,3,6,9,8,7,4,5];
    expect(spiralMatrix(sourceArr)).toStrictEqual(expectArr);
  });

  test('Larger test', () => {
    const sourceArr: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    const expectArr: number[] = [1,2,3,4,8,12,11,10,9,5,6,7];
    expect(spiralMatrix(sourceArr)).toStrictEqual(expectArr);
  });

  test('Faild leetcode', () => {
    const sourceArr: number[][] = [[7],[9],[6]];
    const expectArr: number[] = [7, 9 ,6];
    expect(spiralMatrix(sourceArr)).toStrictEqual(expectArr);
  });
});