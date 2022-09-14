import { reverseString } from "../solution";

describe('Testing reversing of an array', () => {
  
  test('hello string', () => {
    const test_arr = ["h","e","l","l","o"];
    reverseString(test_arr);
    expect(test_arr).toStrictEqual(["o","l","l","e","h"]);
  });

  test('string with captial letter', () => {
    const test_arr = ["H","a","n","n","a","h"];
    reverseString(test_arr);
    expect(test_arr).toStrictEqual(["h","a","n","n","a","H"]);
  });
});
