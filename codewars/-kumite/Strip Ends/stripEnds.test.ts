import stripEnds from "./solution";

describe('Testing strip ends', () => {
  
  test('Basic test', () => {
    expect(stripEnds("$1.00/day", "$", "/day")).toBe('1.00');
  });
});