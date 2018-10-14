const cook = (food, amo) => {
  console.log('cooked', amo + ' ' + food);
  return amo
}

function spy(fun) {
  return function (...args) {
    console.log('called with', args);
    return fun(...args)
  }
}
const spied = spy(cook)
spied('pie', 10)

function spyMem(fun) {
  const mem = {};
  return function (...args) {
    const argums = JSON.stringify(args);
    if (mem[argums]) return mem[argums]
    else return mem[argums] = fun(...args)
  }
}
const memed = spyMem(cook);

memed('cake', 2)
memed('melon', 4)
memed('cake', 2)