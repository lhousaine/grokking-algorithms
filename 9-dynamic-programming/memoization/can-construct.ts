function canConstruct(
  target: string,
  elements: string[],
  memo: Record<string, boolean> = {}
) {
  if (target in memo) {
    return memo[target];
  }

  if (target === '') {
    return true;
  }

  for (const element of elements) {
    if (target.startsWith(element)) {
      const suffix = target.slice(element.length);
      if (canConstruct(suffix, elements, memo)) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return memo[target];
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'], {}));
console.log(canConstruct('abcdef', ['ab', 'cd', 'de', 'a'], {}));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeee', ['e', 'ee'], {}));
