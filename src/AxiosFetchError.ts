import { FetchError } from './FetchError';


export class AxiosFetchError extends FetchError {

    constructor(error: any) {

        if (error.response) {
            super(error.message, 'response');
            this.status = error.response.status;
            return;
        }

        if (error.request) {
            super(error.message, 'network');
            this.type = 'network';
            return;
        }

        super(error.message, 'error');

    }

}
