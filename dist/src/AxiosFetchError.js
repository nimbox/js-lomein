"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchError_1 = require("./FetchError");
class AxiosFetchError extends FetchError_1.FetchError {
    constructor(error) {
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
exports.AxiosFetchError = AxiosFetchError;
