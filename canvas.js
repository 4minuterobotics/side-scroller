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
      y: 0,
      x: 0,
    };
    this.speed = 5;
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
  player.setPosition(
    player.position.x + player.velocity.x,
    player.position.y + player.velocity.y
  );
  // player.position.y += player.velocity.y;

  player.velocity.y += Gravity; // set this to zero when creating and debugging x movement.
}

/////////////////////////////////
// Function to be called when a key is pressed
function handleKeyPressed(event) {
  console.log("Key pressed:", event.key);
  if (event.key == "ArrowUp") {
    player.velocity.y -= 20;
    console.log(player.velocity.y);
  } else if (event.key == "ArrowLeft") {
    player.velocity.x = -player.speed;
  } else if (event.key == "ArrowRight") {
    player.velocity.x = player.speed;
  }
}

// Function to attach event listener for keydown event
function keyDownMethod(callback) {
  window.addEventListener("keydown", callback);
}

// Call keyDownMethod and pass logKeyPressed as the callback
keyDownMethod(handleKeyPressed);

//Function to be called when a key is released
function handleKeyReleased(event) {
  console.log("Key released:", event.key);
  if (event.key == "ArrowUp") {
  } else if (event.key == "ArrowLeft") {
    player.velocity.x = 0;
  } else if (event.key == "ArrowRight") {
    player.velocity.x = 0;
  }
}

// Function to attach event listener for keydown event
function keyUpMethod(callback) {
  window.addEventListener("keyup", callback);
}

// Call keyDownMethod and pass logKeyPressed as the callback
keyUpMethod(handleKeyReleased);
