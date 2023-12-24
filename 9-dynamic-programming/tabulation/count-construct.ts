function countConstructTab(target: string, elements: string[]): number {
  const table: number[] = Array<number>(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (const element of elements) {
        if (target.slice(i, i + element.length) === element) {
          table[i + element.length] += table[i];
        }
      }
    }
  }
  console.log(table);
  return table[target.length];
}
console.log(countConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstructTab('abcdef', ['ab', 'cd', 'de', 'a']));
console.log(countConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeee', ['e', 'ee']));
