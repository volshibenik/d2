function max() {
  console.log(Math.max.apply(Math, arguments));
}

max(-2, 45, 1, 4);
