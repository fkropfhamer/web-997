export function exchangeMutation(x, y, seq) {
    if (typeof seq[x] === 'undefined' || typeof seq[y] === 'undefined') {
        throw Error('Invalid indices');
    }

    const tmp = seq[x];
    seq[x] = seq[y];
    seq[y] = tmp;

    return seq;
}

export function invertMutation(x, y, seq) {
    if (x > y) {
        const tmp = x;
        x = y;
        y = tmp; 
    }

    const head = seq.slice(0,x);
    const middle = invertArray(seq.slice(x, y));
    const tail = seq.slice(y);

    return [...head, ...middle, ...tail];
}

export function invertArray(array) {
    if (array.length === 0) {
        return [];
    }
    const first = array.shift();
    return [...invertArray(array), first];
} 