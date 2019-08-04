export type FetchErrorCode = 'response' | 'network' | 'error';


export class FetchError extends Error {

    public code: FetchErrorCode;

    public status: number | null = null; // when code is 'response'
    public type: string | null = null;   // when code is 'network'

    constructor(message: string, code?: FetchErrorCode) {
        super(message);
        this.code = code || 'error';
    }

}
