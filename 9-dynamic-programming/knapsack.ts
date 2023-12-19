interface Item {
  weight: number;
  value: number;
}

function knapsack(items: Item[], capacity: number): number {
  const n = items.length;
  const dp: number[][] = [];

  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        dp[i][w] = 0;
      } else if (items[i - 1].weight <= w) {
        dp[i][w] = Math.max(
          items[i - 1].value + dp[i - 1][w - items[i - 1].weight],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const items: Item[] = [
  { weight: 2, value: 5 },
  { weight: 3, value: 7 },
  { weight: 4, value: 3 },
  { weight: 5, value: 2 },
];

const knapsackCapacity = 8;
const maxValue = knapsack(items, knapsackCapacity);
console.log('Maximum value in knapsack:', maxValue);
