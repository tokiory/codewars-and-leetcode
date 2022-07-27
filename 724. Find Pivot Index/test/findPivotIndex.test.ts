import pivotIndex from "../solutions";

describe('Calculating Pivot Index', () => {

    test('[1,7,3,6,5,6] Array', () => {
        expect(pivotIndex([1,7,3,6,5,6])).toBe(3);
    });

    test('[1,2,3] Array', () => {
        expect(pivotIndex([1,2,3])).toBe(-1);
    });

    test('[1,7,3,6,5,6] Array', () => {
        expect(pivotIndex([2,1,-1])).toBe(0);
    });
});