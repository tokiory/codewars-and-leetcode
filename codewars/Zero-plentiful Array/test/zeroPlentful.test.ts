import zeroPlentiful from "../solution";

describe('Zero-plentful array', () => {
  test('One mini-island', () => {
    expect(zeroPlentiful([0])).toBe(0);
  });

  test('Two mini-islands', () => {
    expect(zeroPlentiful([0, 1, 0])).toBe(0);
  });
  
  test('Three mini-islands with one long in the middle', () => {
    expect(zeroPlentiful([0, 1, 0, 0, 0, 0, 2, 0])).toBe(0);
  });

  test('Without islands', () => {
    expect(zeroPlentiful([1,2,3,4,5])).toBe(0);
  });

  test('Empty array', () => {
    expect(zeroPlentiful([])).toBe(0);
  });

  test('One big island', () => {
    expect(zeroPlentiful([0, 0, 0, 0, 0, 0])).toBe(1);
  });

  test('Two big islands', () => {
    expect(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0])).toBe(2);
  });

  test('Test with thousand number', () => {
    expect(zeroPlentiful([1000,0,1,0,0,0,0])).toBe(0);
  })
});