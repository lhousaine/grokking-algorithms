function countDown(number: number) {
  console.log(number);
  if (number === 0) {
    return;
  }
  countDown(number - 1);
}

countDown(5);
