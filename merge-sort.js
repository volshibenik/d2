let arr = [1, 0, 9, -1, 22, 11, -5, 4];
let arr2 = [0, 1, 4, 5, 6, 7, 8];

function mergeSort(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  console.log(result);

  return result.concat(left).concat(right);
}

function merge(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.round(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeSort(merge(left), merge(right));
}

const k = merge(arr);
console.log(k);
