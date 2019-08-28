"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const placeholder = /(%%)|(%([sdj]))/g;
exports.sprintf = (message, ...parameters) => {
    let result = message ? message : '';
    result = result.replace(placeholder, (match, escaped, pattern, flag) => {
        if (escaped) {
            return '%';
        }
        var p = parameters.shift();
        switch (flag) {
            case 's':
                return String(p);
            case 'd':
                return Number(p).toString();
            case 'j':
                return JSON.stringify(p);
        }
        return '';
    });
    if (parameters.length > 0) {
        result = result + ' ' + parameters.join(' ');
    }
    return result;
};
