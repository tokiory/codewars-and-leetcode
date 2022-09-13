import { revRot } from '../solution';

describe('Reverse or Rotate?', () => {
  test('Zero string', () => {
    expect(revRot('', 1)).toBe('');
  });

  test('Zero chunk size', () => {
    expect(revRot('3456789012322', 0)).toBe('');
  });

  test('Basic example', () => {
    expect(revRot('733049910872815764', 5)).toBe('330479108928157');
  });
});
