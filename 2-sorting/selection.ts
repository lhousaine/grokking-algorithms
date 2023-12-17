function findSmallest(nums: number[]) {
  let smallest = nums[0];
  let smallestIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < smallest) {
      smallestIndex = index;
      smallest = nums[index];
    }
  }
  return smallestIndex;
}

function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    const smallestIndex = findSmallest(nums.slice(i)) + i;
    if (smallestIndex !== i) {
      const temp = nums[i];
      nums[i] = nums[smallestIndex];
      nums[smallestIndex] = temp;
    }
  }
  return nums;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
