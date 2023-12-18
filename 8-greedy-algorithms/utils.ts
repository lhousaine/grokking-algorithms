export function getTwoSetsIntersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const arrayA: T[] = Array.from(setA);
  const intersectionSet: Set<T> = new Set();

  for (let elem of arrayA) {
    if (setB.has(elem)) {
      intersectionSet.add(elem);
    }
  }

  return intersectionSet;
}

export function getTwoSetsDifference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const elementsFromSetA: T[] = Array.from(setA);
  const differenceSet: Set<T> = new Set();

  for (let element of elementsFromSetA) {
    if (!setB.has(element)) {
      differenceSet.add(element);
    }
  }

  return differenceSet;
}
