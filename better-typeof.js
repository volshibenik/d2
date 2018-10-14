function type(jsObj) {
  console.log(Object.prototype.toString.call(jsObj));
}
var a = [];
type(a);
var b = {};
type(b);
var c = 1;
type(c);
type(null);
type(undefined);
