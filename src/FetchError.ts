import { FetchErrorCode } from "./FetchErrorCode";


export class FetchError extends Error {

    public code: FetchErrorCode;

    public status: number | null = null; // when code is 'response'
    public type: string | null = null;   // when code is 'network'

    constructor(message: string, code?: FetchErrorCode) {
        super(message);
        (<any>Object).setPrototypeOf(this, new.target.prototype);
        this.code = code || 'error';
    }

}
