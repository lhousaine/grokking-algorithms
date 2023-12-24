function bestSumTab(array: number[], sum: number) {
  const table = Array(sum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < sum; i++) {
    if (table[i]) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] + i < table.length) {
          const newResult = [array[j], ...table[i]];
          if (
            !table[array[j] + i] ||
            newResult.length < table[array[j] + i]?.length
          ) {
            table[array[j] + i] = newResult;
          }
        }
      }
    }
  }
  return table[sum];
}

console.log(bestSumTab([2, 3], 5));
console.log(bestSumTab([5, 3, 4, 7], 7));
console.log(bestSumTab([14, 7], 300));
