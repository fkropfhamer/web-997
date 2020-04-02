import { uniqueElementsOfArray, orderRecombination} from '../../../../src/client/evolution/travelingSalesman/recombination';

describe('uniqueElementsOfArray', () => {
    it('filters duplicates', () => {
       expect(uniqueElementsOfArray([1,2,3])).toEqual([1,2,3]);
       expect(uniqueElementsOfArray([1,1,2,2,3,3])).toEqual([1,2,3]); 
    });
});

describe('orderRecombination', () => {
    it('recombinats correctly', () => {
        expect(orderRecombination([], [])).toEqual([]);
        expect(orderRecombination([1,2,3], [6,5,4,3,2,1])).toEqual([1,2,3,6,5,4]);
    });
});
