function allConstruct(
  target: string,
  elements: string[],
  memo: Record<string, string[][]> = {}
) {
  if (target in memo) {
    return memo[target];
  }
  if (target === '') {
    return [[]];
  }

  let result: string[][] = [];

  for (const element of elements) {
    if (target.startsWith(element)) {
      const suffix: string = target.slice(element.length);
      const suffixWays: string[][] = allConstruct(suffix, elements);
      const targetWays: string[][] = suffixWays.map((suffixWay) => [
        element,
        ...suffixWay,
      ]);
      memo[suffix] = suffixWays;
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return memo[target];
}

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef', 'abcd'], {})
);
console.log(allConstruct('abcdef', ['ab', 'cd', 'de', 'a'], {}));
console.log(allConstruct('eeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee'], {}));
