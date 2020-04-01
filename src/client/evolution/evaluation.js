export function euklidianDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

export function euklidianDistanceEvaluation(seq) {
    return seq.reduce((acc, current, i, array) => {
        if (i === 0) return 0;
        return acc + euklidianDistance(current, array[i - 1]);
    }, 0);
}