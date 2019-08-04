export declare class FetchError extends Error {
    code: string;
    status: number;
    constructor(message: string, code: string);
}
