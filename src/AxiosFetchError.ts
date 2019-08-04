import { FetchError } from './FetchError';


export class AxiosFetchError extends FetchError {

    constructor(error: any) {
        super(error.message);

        if (error.response) {
            this.code = 'response';
            this.status = error.response.status;
            return;
        }

        if (error.request) {
            this.code = 'network';
            this.type = 'network';
            return;
        }

    }

}
