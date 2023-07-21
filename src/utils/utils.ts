const isSubset = (subset: string, set: string): boolean => {
    let j = 0;
    for (let i = 0; i < set.length && j < subset.length; i++) {
        if (subset[j] === set[i]) {
            j++;
        }
    }
    return j === subset.length;
}

export {
    isSubset,
}