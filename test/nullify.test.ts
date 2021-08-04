import { nullify } from '../src/nullify';


describe('nullify', () => {

    test('no parameter', () => {
        expect(nullify()).toEqual(null);
    });

    test('undefined parameter', () => {
        expect(nullify(undefined)).toEqual(null);
    });

    test('null parameter', () => {
        expect(nullify(null)).toEqual(null);
    });

    test('only spaces parameter', () => {
        expect(nullify('   ')).toEqual(null);
    });

    test('string parameter', () => {
        expect(nullify('some string'))
            .toEqual('some string');
    });

});
