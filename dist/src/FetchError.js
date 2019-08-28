"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchError extends Error {
    constructor(message, code) {
        super(message);
        this.status = null; // when code is 'response'
        this.type = null; // when code is 'network'
        Object.setPrototypeOf(this, new.target.prototype);
        this.code = code || 'error';
    }
}
exports.FetchError = FetchError;
