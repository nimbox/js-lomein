const placeholder = /(%%)|(%([sdj]))/g;

export const sprintf = (message?: string, ...parameters: any) => {

    let result = message ? message : '';

    result = result.replace(placeholder, (match: string, escaped: string, pattern: string, flag: string) => {

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
