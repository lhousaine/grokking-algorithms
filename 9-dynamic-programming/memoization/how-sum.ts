function howSum(nums: number[], sum: number, memo: {}): number[] | null {
  if (sum in memo) {
    return memo[sum];
  }
  if (sum === 0) {
    return [];
  }
  if (sum < 0) {
    return null;
  }

  for (const num of nums) {
    const remainder = sum - num;
    const remainderResult = howSum(nums, remainder, memo);
    if (remainderResult) {
      memo[sum] = [...remainderResult, num];
      return memo[sum];
    }
  }
  memo[sum] = null;
  return memo[sum];
}

console.log(howSum([2, 3], 5, {}));
console.log(howSum([2, 4], 7, {}));
console.log(howSum([5, 3, 4, 7], 7, {}));
console.log(howSum([14, 7], 300, {}));
