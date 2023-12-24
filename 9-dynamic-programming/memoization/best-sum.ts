function bestSum(
  nums: number[],
  sum: number,
  memo: Record<string, number[] | null> = {}
): number[] | null {
  if (sum in memo) {
    return memo[sum];
  }
  if (sum === 0) {
    return [];
  }
  if (sum < 0) {
    return null;
  }

  let bestSolution: number[] | null = null;

  for (const num of nums) {
    const remainder = sum - num;
    const combinationRemainder = bestSum(nums, remainder, memo);
    if (combinationRemainder) {
      const combination = [...combinationRemainder, num];
      if (!bestSolution || combination.length < bestSolution?.length) {
        bestSolution = combination;
        memo[sum] = combination;
      }
    }
  }
  memo[sum] = bestSolution;
  return bestSolution;
}

console.log(bestSum([2, 3], 5, {}));
console.log(bestSum([2, 4], 7, {}));
console.log(bestSum([5, 3, 4, 7], 7, {}));
console.log(bestSum([14, 7], 300, {}));
