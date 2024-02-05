const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
console.log(context);

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);

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
}

function init() {
  let player = new Player(20, 20);
  player.add();
}
