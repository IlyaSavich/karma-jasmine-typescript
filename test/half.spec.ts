import * as half from 'half';
import * as some from 'test/some';

describe('half', () => {
    it('returns correct values', () => {
        expect(half.half(2)).toBe(some.one());
    });
});
