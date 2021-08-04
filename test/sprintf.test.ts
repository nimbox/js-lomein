import { sprintf } from '../src/sprintf';


describe('sprintf', () => {

    test('no parameter', () => {
        expect(sprintf()).toEqual((''));
    });

    test('no parameter', () => {
        expect(sprintf('hello...')).toEqual(('hello...'));
    });

    // string

    test('string parameter', () => {
        expect(sprintf('with string %s parameter'))
            .toEqual(('with string undefined parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', undefined))
            .toEqual(('with string undefined parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', null))
            .toEqual(('with string null parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', 'string'))
            .toEqual(('with string string parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', 10))
            .toEqual(('with string 10 parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', true))
            .toEqual(('with string true parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', false))
            .toEqual(('with string false parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', new Date(2017, 11, 19)))
            .toEqual(('with string ' + new Date(2017, 11, 19).toString() + ' parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', { id: 10 }))
            .toEqual(('with string [object Object] parameter'));
    });

    test('string parameter', () => {
        expect(sprintf('with string %s parameter', [10, 20]))
            .toEqual(('with string 10,20 parameter'));
    });

    // number

    test('number parameter', () => {
        expect(sprintf('with number %d parameter'))
            .toEqual(('with number NaN parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', undefined))
            .toEqual(('with number NaN parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', null))
            .toEqual(('with number 0 parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', 20))
            .toEqual(('with number 20 parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', 0.1))
            .toEqual(('with number 0.1 parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', 'a'))
            .toEqual(('with number NaN parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', true))
            .toEqual(('with number 1 parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', false))
            .toEqual(('with number 0 parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', new Date(2017, 11, 19)))
            .toEqual(('with number ' + (+new Date(2017, 11, 19)) + ' parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', { id: 10 }))
            .toEqual(('with number NaN parameter'));
    });

    test('number parameter', () => {
        expect(sprintf('with number %d parameter', [10, 20]))
            .toEqual(('with number NaN parameter'));
    });

    // json

    test('json parameter', () => {
        expect(sprintf('with json %j parameter'))
            .toEqual(('with json undefined parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', undefined))
            .toEqual(('with json undefined parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', null))
            .toEqual(('with json null parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', 'string'))
            .toEqual(('with json "string" parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', 20))
            .toEqual(('with json 20 parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', new Date(2017, 11, 19, 0, 0, 0, 0)))
            .toEqual(('with json "' + (new Date(2017, 11, 19, 0, 0, 0, 0)).toISOString() + '" parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', { id: 10 }))
            .toEqual(('with json {"id":10} parameter'));
    });

    test('json parameter', () => {
        expect(sprintf('with json %j parameter', [10, 20]))
            .toEqual(('with json [10,20] parameter'));
    });

    test('string and number parameters', () => {
        expect(sprintf('with string %s and number %s parameters', 'string', 20))
            .toEqual(('with string string and number 20 parameters'));
    });

    // extra

    test('extra parameters', () => {
        expect(sprintf('extra parameters %s', 'hello', 'string', 20))
            .toEqual(('extra parameters hello string 20'));
    });

    test('extra parameters', () => {
        expect(sprintf('extra parameters %s', 'hello', 'string', 20))
            .toEqual(('extra parameters hello string 20'));
    });

    // boundary

    test('boundary', () => {
        expect(sprintf('%'))
            .toEqual(('%'));
    });

    test('boundary', () => {
        expect(sprintf('% %x'))
            .toEqual(('% %x'));
    });

    test('boundary', () => {
        expect(sprintf('%%'))
            .toEqual(('%'));
    });

    test('boundary', () => {
        expect(sprintf('%%s', 'string'))
            .toEqual(('%s string'));
    });

    test('boundary', () => {
        expect(sprintf('%%%s', 'string'))
            .toEqual(('%string'));
    });

});
