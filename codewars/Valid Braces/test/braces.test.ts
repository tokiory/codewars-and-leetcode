import { validBraces } from "../solution";

describe("Testing Valid Braces", () => {
  test("Correct braces", () => {
    expect(validBraces("()")).toBeTruthy();
  });

  test("Multiple correct braces", () => {
    expect(validBraces("([[{}]])")).toBeTruthy();
  });

  test("Incorrect braces", () => {
    expect(validBraces("(())))")).toBeFalsy();
  });

  test("Incorrect multiple braces", () => {
    expect(validBraces("[{]}")).toBeFalsy();
  });

  test("First closed brace", () => {
    expect(validBraces(")()")).toBeFalsy();
  });

  test("Multibraces inline", () => {
    expect(validBraces("()(){}{}[]()[]")).toBeTruthy();
  });
});
