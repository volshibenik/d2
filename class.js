class Mammal {
  constructor(sound) {
    this._sound = sound;
  }
  talk() {
    return this._sound;
  }
}

const fluf = new Mammal("jeol");

class Dog extends Mammal {
  constructor() {
    super("rrrrrr");
  }
}
const archie = new Dog();
const x = archie.talk();
x;
const y = (Mammal.prototype.talk = function() {
  return "kakaka";
});
const baksie = new Dog();
const z = baksie.talk;
z(); // kakaka

const r = Mammal.prototype.talk.bind({
  _sound: "alalala"
});
r(); //kakaka because we overrided prototype with return, otherwise alalala
