let arr = [1, 0, 9, -1, 22, 11, -5, 4];

function bubble(array) {
  let arr = [];
  const len = array.length;
  for (let j = 0; j < len - 1; j++) {
    for (let i = 0; i < len - j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }

  return array;
}
console.log(bubble(arr));
