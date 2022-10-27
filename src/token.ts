var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

/**
 * Create a random token of given size using chars [0-9A-Za-z].
 *
 * @param {int} n - The size of the token.
 */
export function token(n: number) {

    var token = '';
    for (var i = 0; i < n; i++) {
        token += characters[Math.floor(Math.random() * characters.length)];
    }

    return token;

}