const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
console.log(context);

canvas.width = 1024;
canvas.height = 576;

const Gravity = 1;

let player;

function getWidth() {
  return canvas.width;
}

function getHeight() {
  return canvas.height;
}

class Player {
  constructor(width, height, color = "red") {
    this.ctx = context;
    this.width = width;
    this.height = height;
    this.color = color;
    this.position = {
      x: getWidth() / 2,
      y: getHeight() / 2,
    };
    this.velocity = {
      y: 2,
    };
    this.debug = false; //debug mode is initially off
  }

  setColor(color) {
    this.color = color;
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  add() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

main();

function main() {
  init();
  animate();
}

function init() {
  player = new Player(20, 20);
}

function animate() {
  window.requestAnimationFrame(animate);

  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);

  player.add();
  player.setPosition(player.position.x, player.position.y + player.velocity.y);
  // player.position.y += player.velocity.y;

  player.velocity.y += Gravity;
}
