import { chunkArray } from "../../../../src/client/ml/mnist/mnistNormalize";

describe('chunkArray', () => {
    it('chunks an array into equal parts', () => {
        expect(chunkArray([1,2,3], 1)).toEqual([[1],[2],[3]]);
        expect(chunkArray([1,2,3,4,5,6,7,8,9,0], 2)).toEqual([[1,2],[3,4],[5,6],[7,8],[9,0]]);
    });

    it('chunks an empty array', () => {
        expect(chunkArray([], 2)).toEqual([])
    })
});
