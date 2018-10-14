function extend(ch, pa) {
  ch.prototype = Object.create(pa.prototype);
  ch.prototype.constructor = ch;
  ch.super = pa.prototype;
}

function Fruit(type) {
  this.type = type;
}
let banana = new Fruit("banana");
console.log(banana);

function Kiwi(type, color) {
  Kiwi.super.constructor.call(this, type);
  this.color = color;
}

extend(Kiwi, Fruit);

let kiwi = new Kiwi("kiwi", "green");
console.log(kiwi);
