Function.prototype.myBind = function(thisToApply, ...agu) {
  let obj = this;
  return function(...args) {
    const argums = agu.concat(args);
    console.log("wwww", argums, thisToApply);

    return obj.apply(thisToApply, agu.concat(args));
  };
};
let o = {
  kk: 10,
  say: function(a, b, c, d, e, f) {
    console.log(
      `i neeqad " + 1:${a}  2:${b} 3${c} 4${d} 5${e} 6${f} + this.kk`
    );
  }
};
let y = o.say.myBind(o, "jj", 12);
console.log(y.toString());

y("ssssssss");

const summ = x => y => console.log(x + y);
const sum = (x, y) => console.log(x + y);

const s = summ.bind(null, 10);
s.toString();
[(1, 21)].map(s());

const su = sum.myBind(null, 22);
su(8);
