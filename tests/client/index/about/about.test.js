import { answerQuestion, isEven } from '../../../../src/client/index/about/about';

describe('about', () => {
    describe('isEven', () => {
        it('returns true for even numbers', () => {
            expect(isEven(2)).toBe(true);
            expect(isEven(-2)).toBe(true);
            expect(isEven(0)).toBe(true);
            expect(isEven(4)).toBe(true);
            expect(isEven(1000)).toBe(true);
        });

        it('returns false for uneven numbers', () => {
            expect(isEven(1)).toBe(false);
            expect(isEven(-1)).toBe(false);
            expect(isEven(55)).toBe(false);
            expect(isEven(9)).toBe(false);
            expect(isEven(1001)).toBe(false);
        });
    });

    describe('answerQuestion', () => {
        it('returns no for uneven length of question', () => {
            expect(answerQuestion('')).toBe('no');
            expect(answerQuestion('12')).toBe('no');
            expect(answerQuestion('asdfgh')).toBe('no');
            expect(answerQuestion('hello?')).toBe('no');
            expect(answerQuestion('nice question?')).toBe('no');
        });

        it('returns yes for even length of question', () => {
            expect(answerQuestion('A')).toBe('yes');
            expect(answerQuestion('123')).toBe('yes');
            expect(answerQuestion('asdfghj')).toBe('yes');
            expect(answerQuestion('hello')).toBe('yes');
            expect(answerQuestion('nice question')).toBe('yes');
        });
    });
});