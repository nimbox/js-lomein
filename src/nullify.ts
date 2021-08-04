/**
 * Trim a string and convert it to null if the resulting string is empty.
 *
 * @param {string} s - The string to nullify.
 */
export function nullify(s?: string | null) {

    if (s == null) { return null; }

    const t = s.trim();
    if (t.length === 0) { return null; }

    return t;

}
