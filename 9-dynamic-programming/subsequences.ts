function generateSubsequences(arr: number[], M: number) {
  function backtrack(start: number, current: number[]) {
    if (current.length === M) {
      subsequences.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  const subsequences: number[][] = [];
  backtrack(0, []);
  return subsequences;
}

// Example usage:
const array = [1, 2, 3, 6, 9, 4];
const M = 4;

const result = generateSubsequences(array, M);
console.log(result);
