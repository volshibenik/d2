const f1 = new Factory();
const f2 = new Factory();

f1 === f2  //true needed

// so

function Factory() {
  const instance = this;

  Factory = function () {
    return instance;
  }
  Factory()
}
console.log(f1 === f2);
console.log(Factory.toString());


