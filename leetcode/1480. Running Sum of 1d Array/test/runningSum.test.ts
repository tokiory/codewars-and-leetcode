import runningSum from "../solution";

describe('Testing running sum of array', () => {

    test('[1,2,3,4] Array', () => {
        expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10]);
    });

    test('[1,1,1,1] Array', () => {
        expect(runningSum([1,1,1,1])).toStrictEqual([1,2,3,4]);
    });

    test('[0,0,0,0,0,0,0] Array', () => {
        expect(runningSum([0,0,0,0,0,0,0])).toStrictEqual([0,0,0,0,0,0,0]);
    });

    test('[3,1,2,10,1] Array', () => {
        expect(runningSum([3,1,2,10,1])).toStrictEqual([3,4,6,16,17]);
    })
});