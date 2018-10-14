function talk() {
  console.log(this, this.sound);

}
var animal = {
  talk
}
animal.talk()

var cat = {
  sound: 'meow'
}
Object.setPrototypeOf(cat, animal)
cat.talk()
var wildCat = {
  howl: function () {
    console.log(this.sound.toUpperCase());


  }
}
Object.setPrototypeOf(wildCat, cat)
wildCat.howl()