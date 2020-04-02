export function orderRecombination(pseq, seq) {
    return uniqueElementsOfArray([...pseq, ...seq])
}

export function uniqueElementsOfArray(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

export function edgeRecombination(seq1, seq2) {
    // TODO: implement!
    if (Math.random() > 0.5) {
        return seq2;
    }

    return seq1;
}
