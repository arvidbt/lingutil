export const isSubset = (subset: string, set: string): boolean => {
  let match = 0;
  for (let wordIndex = 0; wordIndex < set.length && match < subset.length; wordIndex++) {
    if (subset[match] === set[wordIndex]) {
      match++;
    }
  }
  return match === subset.length;
};