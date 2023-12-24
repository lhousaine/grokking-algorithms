function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtrack = (current: number[], remaining: number[]) => {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      backtrack(current, newRemaining);
      current.pop();
    }
  };

  backtrack([], nums);
  return result;
}

// Example usage:
const nums = [1, 2, 3];
const permutations = permute(nums);
console.log(permutations);
