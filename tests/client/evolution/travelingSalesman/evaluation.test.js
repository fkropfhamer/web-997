import { euklidianDistance, euklidianDistanceEvaluation } from '../../../../src/client/evolution/travelingSalesman/evaluation';

describe('euklidianDistance', () => {
    it('evaluates the right distance', () => {
        expect(euklidianDistance({x: 1, y: 1}, {x: 1, y:1})).toBe(0);
        expect(euklidianDistance({x: 0, y: 1}, {x: 1, y:1})).toBe(1);
        expect(euklidianDistance({x: 1, y: 1}, {x: 1, y:0})).toBe(1);
        expect(euklidianDistance({x: 0, y: 0}, {x: 1, y:1})).toBe(1.4142135623730951);
    })
});

describe('euklidianDistanceEvaluation', () => {
    it('evaluates the right weight', () => {
        expect(euklidianDistanceEvaluation([{x: 1, y: 0}, {x: 2, y: 0}])).toBe(1);
        expect(euklidianDistanceEvaluation([{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 3, y: 5}])).toEqual(7);
    });
});
