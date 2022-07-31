import { divCon } from "../solution";

describe('Testing Divide and Conquer', () => {

    test('String: [1,2,3,4, \'5\']', () => {
        expect(divCon([1,2,3,4,'5'])).toBe(5);
    });

    test('String: [0,0,0,0,\'0\']', () => {
        expect(divCon([0,0,0,0,'0'])).toBe(0);
    });

    test('String: [0, \'-5\']', () => {
        expect(divCon([0, '-5'])).toBe(5);
    });

    test('String: [360, \'-360\']', () => {
        expect(divCon([360, '360'])).toBe(0);
    });
});