function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let indexLeft: number = 0,
    indexRight: number = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);

  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([10, 2, 5, 3])); // output [2,3,5,10]
