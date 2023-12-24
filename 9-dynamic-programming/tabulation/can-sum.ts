function canSumTab(array: number[], sum: number) {
  const table = Array(sum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < sum; i++) {
    if (table[i]) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] + i < table.length) table[array[j] + i] = true;
      }
    }
  }
  return table[sum];
}

console.log(canSumTab([2, 3], 5));
console.log(canSumTab([5, 3, 4, 7], 7));
console.log(canSumTab([14, 7], 300));
