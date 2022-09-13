import { digitalRoot } from '../solution';

describe('Testing digital root', () => {
  test('Testing number: 16', () => {
    expect(digitalRoot(16)).toBe(7);
  });

  test('Testing number: 942', () => {
    expect(digitalRoot(942)).toBe(6);
  });

  test('Testing number: 132189', () => {
    expect(digitalRoot(132189)).toBe(6);
  });

  test('Testing number: 493193', () => {
    expect(digitalRoot(493193)).toBe(2);
  });
});
