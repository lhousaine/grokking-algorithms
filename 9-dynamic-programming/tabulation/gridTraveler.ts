function gridTrevelerTab(m: number, n: number) {
  const table: number[][] = Array(m + 1)
    .fill([])
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (i + 1 <= m) table[i + 1][j] += table[i][j];
      if (j + 1 <= n) table[i][j + 1] += table[i][j];
    }
  }
  return table[m][n];
}

console.log(gridTrevelerTab(1, 1));
console.log(gridTrevelerTab(2, 3));
console.log(gridTrevelerTab(3, 3));
console.log(gridTrevelerTab(7, 6));
console.log(gridTrevelerTab(18, 18));
