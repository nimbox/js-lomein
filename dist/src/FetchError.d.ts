import { FetchErrorCode } from "./FetchErrorCode";
export declare class FetchError extends Error {
    code: FetchErrorCode;
    status: number | null;
    type: string | null;
    constructor(message: string, code?: FetchErrorCode);
}
