const box: any = [
  [[[[[1, 2]]]], [[[1, 3]], [1, 2]]],
  [[[[1]]], [[1], [1, 2]]],
];

function findFirstNumberKey(box: any): number | undefined {
  if (typeof box === 'number') {
    return box;
  }
  if (!box.length) {
    return;
  }
  for (let i = 0; i < box.length; i++) {
    const result = findFirstNumberKey(box[i]);
    if (result !== undefined) {
      return result;
    }
  }
}

console.log(findFirstNumberKey(box));
