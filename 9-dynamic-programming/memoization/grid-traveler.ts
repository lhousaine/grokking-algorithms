function gridTraveler(
  n: number,
  m: number,
  memo: Record<string, number> = {}
): number {
  const key: string = n + ',' + m;
  if (key in memo) {
    return memo[key];
  }
  if (n === 1 && m === 1) {
    return 1;
  }
  if (n === 0 || m === 0) {
    return 0;
  }
  memo[key] = gridTraveler(n, m - 1, memo) + gridTraveler(n - 1, m, memo);
  return memo[key];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(10, 10));
console.log(gridTraveler(50, 50));
