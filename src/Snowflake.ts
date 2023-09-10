/**
 * Class representing a Snowflake ID generator.
 */
export class Snowflake {

    private epochSize: number;
    private shardSize: number;
    private sequenceSize: number;

    private epochShift: bigint;
    private shardShift: bigint;
    private sequenceModulo: bigint;

    private epoch: bigint = BigInt(1609459200000);
    private shard: bigint = BigInt(0);

    private currentSequence: bigint = BigInt(0);

    /**
     * Create a new Snowflake ID generator.
     * 
     * @param {number} epochSize - The number of bits used for the epoch timestamp. Default is 41.
     * @param {number} shardSize - The number of bits used for the shard ID. Default is 10.
     * @param {number} sequenceSize - The number of bits used for the sequence. Default is 12.
     */
    constructor(epochSize = 41, shardSize = 10, sequenceSize = 12) {

        this.epochSize = epochSize;
        this.shardSize = shardSize;
        this.sequenceSize = sequenceSize;

        if (this.epochSize + this.shardSize + this.sequenceSize !== 63) {
            throw new Error('Invalid epoch, shard or sequence size.');
        }

        this.epochShift = BigInt(this.shardSize + this.sequenceSize);
        this.shardShift = BigInt(this.sequenceSize);
        this.sequenceModulo = BigInt(1) << BigInt(this.sequenceSize);

    }

    /**
     * Get the epoch timestamp.
     * 
     * @return {number} - The epoch timestamp as a number.
     */
    getEpoch(): number {
        return Number(this.epoch);
    }

    /**
     * Set the epoch timestamp.
     * 
     * @param {number} epoch - The epoch timestamp.
     * @return {Snowflake} - The Snowflake instance.
     */
    setEpoch(epoch: number): Snowflake {
        this.epoch = BigInt(epoch);
        return this;
    }

    /**
     * Get the shard ID.
     * 
     * @return {number | undefined} - The shard ID.
     */
    getShard(): number {
        return Number(this.shard);
    }

    /**
     * Set the shard ID.
     * 
     * @param {number} shard - The shard ID.
     * @return {Snowflake} - The Snowflake instance.
     */
    setShard(shard: number): Snowflake {
        this.shard = BigInt(shard);
        return this;
    }

    /**
     * Private method to get the next sequence number.
     * 
     * @return {bigint} - The next sequence number.
     * 
     * @private
     */
    private sequence(): bigint {
        this.currentSequence = this.currentSequence + BigInt(1);
        return this.currentSequence % this.sequenceModulo;
    }

    /**
     * Generate a snowflake ID.
     * 
     * @return {string} - The generated snowflake ID as a string.
     */
    generate(): string {

        return this.calculate(Date.now(), this.sequence());

    }

    /**
     * Calculate a snowflake ID based on a date and sequence number.
     * 
     * @param {number} date - The date in milliseconds since the UNIX epoch.
     * @param {bigint} sequence - The sequence number.
     * 
     * @return {string} - The calculated snowflake ID as a string.
     */
    calculate(date: number, sequence: bigint): string {

        const now: bigint = BigInt(date);
        const epoch: bigint = (now - this.epoch) << this.epochShift;
        const shard: bigint = this.shard << this.shardShift;

        const snowflake = epoch | shard | sequence;
        return snowflake.toString();

    }

}

