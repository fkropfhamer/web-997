import { invertArray, exchangeMutation, invertMutation } from '../../../src/client/evolution/mutation';

describe('invertArray', () => {
    it('inverts an array correct', () => {
        expect(invertArray([1,2,3,4,5])).toEqual([5,4,3,2,1]);
        expect(invertArray([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });

    it('inverts an empty array', () => {
        expect(invertArray([])).toEqual([]);
    });
});

describe('exchangeMutation', () => {
    it('exchanges two given indices', () => {
        expect(exchangeMutation(0,1, [2, 3])).toEqual([3, 2]);
    });

    it('throws an error on exceeding indices', () => {
        expect(() => exchangeMutation(-1, 1, [1,2])).toThrow('Invalid indices');
        expect(() => exchangeMutation(1, 5, [1,2])).toThrow('Invalid indices');
    });
});

describe('invertMutation', () => {
    it('inverts the sequence between two given indices', () => {
        expect(invertMutation(1, 3, [1,2,3,4])).toEqual([1,3,2,4]);
        expect(invertMutation(3, 1, [1,2,3,4])).toEqual([1,3,2,4]);
        expect(invertMutation(0, 3, [1,2,3,4])).toEqual([3,2,1,4]);
        expect(invertMutation(1, 4, [1,2,3,4])).toEqual([1,4,3,2]);
        expect(invertMutation(1, 4, [1,2,3,4,5])).toEqual([1,4,3,2,5]);
    });
});
