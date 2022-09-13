import { validISBN10 } from '../solution';

describe('ISBN-10 Validation', () => {
  const sampleTests: [string, boolean][] = [
    ['1112223339', true],
    ['048665088X', true],
    ['1293000000', true],
    ['1234554321', true],
    ['1234512345', false],
    ['1293', false],
    ['X123456788', false],
    ['ABCDEFGHIJ', false],
    ['XXXXXXXXXX', false],
    ['048665088XZ', false],
  ];

  sampleTests.forEach((check) => {
    test('Testing codewars unit tests', () => {
      expect(validISBN10(check[0])).toBe(check[1]);
    });
  });
});
