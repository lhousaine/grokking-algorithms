function sum(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  return nums[0] + sum(nums.slice(1));
}

console.log(sum([1, 2, 3, 4, 5, 6, 7]));
