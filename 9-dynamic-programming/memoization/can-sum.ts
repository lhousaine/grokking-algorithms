function canSum(
  nums: number[],
  sum: number,
  memo: Record<string, boolean> = {}
) {
  if (sum in memo) {
    return memo[sum];
  }
  if (sum === 0) {
    return true;
  }
  if (sum < 0) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    const remainder = sum - nums[i];
    memo[remainder] = canSum(nums, remainder, memo);
    if (memo[remainder]) {
      return true;
    }
  }
  memo[sum] = false;
  return false;
}

console.log(canSum([2, 3], 5, {}));
console.log(canSum([5, 3, 4, 7], 7, {}));
console.log(canSum([14, 7], 300, {}));
