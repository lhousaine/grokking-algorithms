function canConstructTab(target: string, elements: string[]): boolean {
  const table: boolean[] = Array<boolean>(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (const element of elements) {
        if (target.slice(i, i + element.length) === element) {
          table[i + element.length] = true;
        }
      }
    }
  }
  return table[target.length];
}

console.log(canConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructTab('abcdef', ['ab', 'cd', 'de', 'a']));
console.log(canConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeee', ['e', 'ee']));
