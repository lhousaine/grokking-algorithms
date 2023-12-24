function fibu(n: number) {
  const array: number[] = Array(n + 1).fill(0);
  array[1] = 1;
  for (let i = 0; i < n; i++) {
    array[i + 1] += array[i];
    array[i + 2] += array[i];
    console.log(array);
  }

  return array[n];
}

console.log(fibu(6));
