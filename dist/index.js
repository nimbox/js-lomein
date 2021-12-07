/**
 * Trim a string and convert it to null if the resulting string is empty.
 *
 * @param {string} s - The string to nullify.
 */
function nullify(s) {
    if (s == null) {
        return null;
    }
    const t = s.trim();
    if (t.length === 0) {
        return null;
    }
    return t;
}

class FetchError extends Error {
    constructor(message, code) {
        super(message);
        this.status = null; // when code is 'response'
        this.type = null; // when code is 'network'
        this.code = code || 'error';
    }
}

class AxiosFetchError extends FetchError {
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

const placeholder = /(%%)|(%([sdj]))/g;
const sprintf = (message, ...parameters) => {
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

export { AxiosFetchError, FetchError, nullify, sprintf };
//# sourceMappingURL=index.js.map
