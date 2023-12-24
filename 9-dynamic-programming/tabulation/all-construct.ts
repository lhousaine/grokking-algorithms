function allConstructTab(target: string, elements: string[]): string[][] {
  const table: string[][][] = Array<string[]>(target.length + 1)
    .fill([])
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (const element of elements) {
      if (target.slice(i, i + element.length) === element) {
        table[i + element.length].push(
          ...table[i].map((el) => [...el, element])
        );
      }
    }
  }
  return table[target.length];
}

console.log(
  allConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])
); // [['abc','def'],['ab','cd','ef'],['abcd','ef']]
console.log(allConstructTab('abcdef', ['ab', 'cd', 'de', 'a']));
console.log(allConstructTab('eeeeeeeeeeeeeeeee', ['e', 'ee']));
