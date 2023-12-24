function fib(n: number, memo: Record<number, number> = {}): number {
  if (memo[n]) return memo[n];
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(4));
console.log(fib(6));
console.log(fib(10));
console.log(fib(50));
