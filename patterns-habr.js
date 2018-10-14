/* deco */

function Ball(params) {
  this.radius = params.radius;
  this.color = params.color;
}
Ball.prototype = {
  constructor: Ball,
  draw() {
    console.log(`drew a ball with rad ${this.radius} and ${this.color}`);
  }
};
const simple = new Ball({ radius: 100, color: "red" });
simple.draw();

function DecoBall(ball) {
  this.ball = ball;
}
DecoBall.prototype = {
  constructor: DecoBall,
  draw() {
    this.ball.draw();
    console.log("and some deco stuff");
  }
};

const deco = new DecoBall(simple);
deco.draw();
