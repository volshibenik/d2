const obj = function(rad) {
  return {
    inc: () => rad++,
    rad: () => console.log(rad)
  };
};

const pie = obj(9);
pie.inc();
pie.inc();
pie.rad();
/*  */
console.log("-------------------");

function doNTimes(n, action) {
  const memo = [];
  function doNRec(n) {
    if (n >= 1) {
      action(n);
      memo.push(action(n));
      console.log(memo);
      doNRec(n - 1);
    }
  }
  doNRec(n);
}

function kk(para) {
  console.log(para);
  return para;
}
doNTimes(4, kk);

/*  */
console.log("-------------------");

function createInc(startV) {
  return function inc(step) {
    console.log((startV += step));

    /*  return (startV += step); */
  };
}
let myInc = createInc(5);
myInc(1);
myInc(2);
myInc(4);

/*  */
console.log("-------------------");

var array = [];
function createNInc(startV) {
  array.push(function(v) {
    startV = v;
  }); //able to modify createNInc param startV
  return function inc(step) {
    console.log((startV += step));
  };
}

let inc1 = createNInc(5);
inc1(2); // 7
array[0](1); // modified 5 below
inc1(0); // 1
let inc2 = createNInc(19);
inc2(1); // 20
array[0](100);
inc2(0); //still 20, array[0] can't affect
array[1](100);
inc2(0); //100 but arrray[1] can

/*  */
console.log("-------------------");

const createSecretHolder = secret => {
  return {
    get: () => {
      console.log(secret);
    },
    set: v => (secret = v)
  };
};
const kay = createSecretHolder("ice");
kay.get();
kay.set("snow");
kay.get();

/*  */
console.log("-------------------");

const objj = {
  method: (function() {
    let count = 0;
    return function name(params) {
      console.log("N", ++count);
      return "result";
    };
  })()
};

objj.method();
objj.method();
