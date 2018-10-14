function add(n) {
  let sum = function(x) {
    return add(n + x);
  };
  sum.valueOf = function() {
    return n;
  };
  return sum;
}
const k = add(2)(3)(4) - 1;
console.log("1", k, typeof k);
