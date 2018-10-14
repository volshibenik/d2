const cat = {
  init: function (sound) {
    this.sound = sound
  },
  meow: function () {
    console.log(this.sound);
  }
}

const whiskers = Object.create(cat)  //traditional 
whiskers.init('meowww')
whiskers.meow()

const objCreate = (proto) => {
  const ob = {};                  // create {}
  Object.setPrototypeOf(ob, proto) // set prototype to proto
  return ob;                      // return it
}

const fluffykins = objCreate(cat);
fluffykins.init('woof');
fluffykins.meow()

console.log(cat.isPrototypeOf(fluffykins));
