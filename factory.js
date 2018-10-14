const animal = {
  type: "animal",
  nPaws: 4,
  walk() {
    console.log("I walk");
  }
};

const mouseFactory = height => {
  let secret = 1;
  return Object.assign(Object.create(animal), {
    height
  });
};

const catFactory = height => {
  let secret = 1;
  return Object.assign({}, animal, {
    height
  });
};
const mouse = mouseFactory(10);
console.log(animal.walk());
console.log(mouse.walk(), mouse.height, mouse.nPaws);
