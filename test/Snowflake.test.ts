import { Snowflake } from '../src/Snowflake';

describe('Snowflake', () => {
    let snowflake: Snowflake;

    beforeEach(() => {
        snowflake = new Snowflake();
    });

    test('should throw error for invalid size combination', () => {
        expect(() => new Snowflake(42, 10, 12)).toThrow('Invalid epoch, shard or sequence size.');
    });

    test('should set and get epoch', () => {
        snowflake.setEpoch(1609459200000);
        expect(snowflake.getEpoch()).toBe(1609459200000);
    });

    test('should set and get shard', () => {
        snowflake.setShard(1);
        expect(snowflake.getShard()).toBe(1);
    });

    test('should generate a valid snowflake ID', () => {
        snowflake.setEpoch(1609459200000);
        snowflake.setShard(1);
        const id = snowflake.generate();
        expect(typeof id).toBe('string');
    });

    test('should return unique IDs for subsequent generations', () => {
        snowflake.setEpoch(1609459200000);
        snowflake.setShard(1);
        const id1 = snowflake.generate();
        const id2 = snowflake.generate();
        expect(id1).not.toBe(id2);
    });

    test('should return same id as postgresql', () => {
        // Check with Postgresql:
        // SELECT ((1694305321479 - 1609459200000) << 22) | ( 8 << 12) | 722;
        snowflake.setShard(8);
        const id1 = snowflake.calculate(1694305321479, BigInt(722));
        expect(id1).toBe('355870426703889106');
    });

});
