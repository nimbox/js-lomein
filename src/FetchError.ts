export class FetchError extends Error {

    public code: string;
    public status: number = 0;

    constructor(message: string, code: string) {
        super(message);
        this.code = code;
    }

}
