function howSumTab(array: number[], sum: number) {
  const table = Array(sum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < sum; i++) {
    if (table[i]) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] + i < table.length)
          table[array[j] + i] = [array[j], ...table[i]];
      }
    }
  }
  return table[sum];
}

console.log(howSumTab([2, 3], 5));
console.log(howSumTab([5, 3, 4, 7], 7));
console.log(howSumTab([14, 7], 300));
