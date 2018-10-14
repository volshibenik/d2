function Person(saying, age) {
  this.saying = saying;
  this.age = age;
}

Person.prototype.talk = function() {
  console.log(
    "I say: ",
    this.saying,
    this.age && "I also am " + this.age + " old"
  );
};
var crockford = new Person("SEMICOLANS!!1!");
crockford.talk();

/* 
to replicate new:
1. create obj
2. set its proto to constructor prototype
3. execute constructor with obj as this
4. return obj
 */
function nouveau(constructor, ...args) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  constructor.call(obj, ...args);
  return obj;
  /* actually, need to return constructor.call(obj, ...args) || obj for edge cases when Person has return and its {} */
}

var kk = nouveau(Person, "NOSEMI!", 33);
kk.talk();
