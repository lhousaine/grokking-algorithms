function countConstruct(
  target: string,
  elements: string[],
  memo: Record<string, number> = {}
) {
  if (target in memo) {
    return memo[target];
  }
  if (target === '') {
    return 1;
  }
  let totalCount = 0;

  for (const element of elements) {
    if (target.startsWith(element)) {
      const numWaysForRest = countConstruct(
        target.slice(element.length),
        elements
      );
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return memo[target];
}

console.log(
  countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef', 'abcd'], {})
);
console.log(countConstruct('abcdef', ['ab', 'cd', 'de', 'a'], {}));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeee', ['e', 'ee'], {}));
