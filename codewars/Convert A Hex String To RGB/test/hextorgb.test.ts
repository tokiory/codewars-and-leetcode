import hexStringToRGB from "../solution";

describe('Testing hex to rgb transformation', () => {
  
  test('White color', () => {
    const EXPECTED_RESULT = {
      r: 255,
      g: 255,
      b: 255
    };

    expect(hexStringToRGB('#FFFFFF')).toStrictEqual(EXPECTED_RESULT);
  });

  test('Black color', () => {
    const EXPECTED_RESULT = {
      r: 0,
      g: 0,
      b: 0
    };

    expect(hexStringToRGB('#000000')).toStrictEqual(EXPECTED_RESULT);
  });

  test('Green color', () => {
    const EXPECTED_RESULT = {
      r: 0,
      g: 255,
      b: 0
    };

    expect(hexStringToRGB('#00FF00')).toStrictEqual(EXPECTED_RESULT);
  });

  test('Basic codewars', () => {
    const EXPECTED_RESULT = {
      r: 255,
      g: 153,
      b: 51
    };

    expect(hexStringToRGB('#FF9933')).toStrictEqual(EXPECTED_RESULT);
  });

});