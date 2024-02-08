//1st javascrit code within this file
console.log("hello world");

//creating black box code from codeHS
////////////////////////////////////////////////////////// Read line. readLine("type in a value");
// This function causes a popup box to show a message asking you to enter a value, then returns that value.
// a. everyone type the following
prompt("Hello");

// b. now set a variable equal to the value of this prompt
let userInput = prompt("hello whats your name");
console.log(userInput);

// c. This function causes a message to show up as a pop up, similar to the console
alert("message");

//d. now create the readLine function that will only accept the users input if an actual value is entered, and then reutrn that value
//if no value is entered, an alert will tell the user to enter a valid input and re-generate the prompt. This should be in a while loop
// if a value is entered, break out of the while loop.
// then return the input value.
function readLine(promptMessage) {
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);
    if (userInput) {
      break;
    } else {
      alert("please enter a valid input");
    }
  }
  return userInput;
}

//d2. call a function to test this
let readLineTest = readLine("write a string");
console.log(readLineTest);

/////////////////////////////////////////////////////////////////// Read int readInt("type in a number")
// This function generates a popup box that repeatedly asks you to enter a value, until the value in an actual number. Then it returns the number

//since the prompt function always returns the user's input as a string, the input has to be converted back to a number using parseInt
//for example:
let fakeNumber1 = prompt("enter a number");
let fakeNumber2 = prompt("enter another number");

console.log(fakeNumber1 + fakeNumber2);

//now use parseInt to convert strings into integers
let realNumber1 = parseInt(fakeNumber1);
let realNumber2 = parseInt(fakeNumber2);
console.log(realNumber1 + realNumber2);

function readInt(message) {
  let number;
  while (true) {
    let userInput = prompt(message);
    number = parseInt(userInput);
    if (userInput && !isNaN(number)) {
      break;
    } else {
      alert("please enter a valid input");
    }
  }
  return number;
}

let readIntTest1 = readInt("test hey type a number");
let readIntTest2 = readInt("test type another number");
console.log(readIntTest1 + readIntTest2);

//////////////////////////////////////////////////////////////////////////////3 setTimer and stopTimer
// setTimer will cause another function to repeat periodically at whatever rate you decide
// stopTimer will cancel this reptition

let intervalIds = {}; // Object to store interval IDs for different functions
let delay = 200; // Variable to hold the delay value

// Function to be repeatedly called
function doThis() {
  console.log("Function called at interval");

  // Check if the condition is met (e.g., ms is equal to 1000)
  if (ms === 1000) {
    stopTimer(doThis);
  }
}

// Function to set the timer
function setTimer(callback, interval) {
  intervalIds[callback] = setInterval(callback, interval);
}

// Function to stop the timer
function stopTimer(callback) {
  clearInterval(intervalIds[callback]);
  console.log(`Timer stopped for ${callback.name}`);
}

// Set the timer to repeatedly call doThis at an interval of 'delay' milliseconds
setTimer(doThis, delay);

//////////////////////////////////////////////////////////////////////////////// Objects
let bus1 = {
  //properties
  make: "Ford",
  Model: "Mustang",
  wheels: 6,
  color: "yellow",
  fuelType: "diesel",
  openings: {
    windows: 50,
    exits: 3,
  },

  //methods
  handleTrainTracks() {
    console.log("come to a complete stop");
    console.log("Open stop sign and door");
  },
  setColor(color) {
    this.color = color;
  },
};

console.log(bus1);
console.log(bus1.openings.windows);
bus1.handleTrainTracks();
bus1.setColor("blue");
console.log(bus1.color);

////////////////////////////////////////////////////////////////////////////// Classes
class Bus {
  constructor(make, model, numWindows) {
    //properties
    this.make = make;
    this.model = model;
    this.wheels = 6;
    this.color = "yellow";
    this.fuelType = "deisel";
    this.openings = {
      windows: numWindows,
      exits: 3,
    };
  }
  //methods
  handleTrainTracks() {
    console.log("come to a complete stop");
    console.log("Open stop sign and door");
  }
  setColor() {
    this.color = color;
  }
}

let bus2 = new Bus("Mercedes Benz", "3000X", 10);
console.log(bus2.fuelType);

let bus3 = new Bus("Hummer", "V5", 20);

////////////////////////////////////////////////////////////////////////////////////// randomizer
let Randomizer = {
  nextInt(low, high) {
    if (typeof low !== "number" || typeof high !== "number" || low >= high) {
      throw new Error(
        "Invalid arguments: 'low' should be less than 'high' and both should be numbers."
      );
    }
    //The Math.random() function returns a decimal between 0 and .9 repeating
    //We adjust by doing math with the random number to get it to our desired range,
    //then round it down to the nearest whole number with Math.floor
    return Math.floor(Math.random() * (high - low + 1) + low);
  },

  nextBoolean() {
    return Math.random() >= 0.5; // since the random number will be between 0 - .9 repeating...
  },
};

console.log(Randomizer.nextInt(8, 10));
console.log(Randomizer.nextBoolean());

//////////////////////////////////////////////////////////////////////// canvas stuff

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

/***********Shapes*****************/

///////////////////////////////////////////////////////////////Rectangles
class Rectangle {
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

let rect = new Rectangle(20, 40);
rect.add();

function add(object) {
  object.add();
}

let snakeHead = new Rectangle(40, 30, "green");
add(snakeHead);

///////////////////////////////////////////////////////////////// Circles
class Circle {
  constructor(radius) {
    this.ctx = context;
    this.radius = radius;
    this.color = "orange";
    this.position = {
      x: canvas.width / 2,
      y: getHeight() / 2,
    };
  }

  setColor(newColor) {
    this.color = newColor;
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  setSize(radius) {
    this.radius = radius;
  }

  add(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

let dot = new Circle(39);
dot.setPosition(23, 234);
add(dot);

////////////////////////////////////////////////////////////////////// lines
// Line class definition
class Line {
  constructor(firstX, firstY, secondX, secondY) {
    this.ctx = context;
    this.startX = firstX;
    this.startY = firstY;
    this.endX = secondX;
    this.endY = secondY;
    this.color = "black"; // Default color
  }

  add() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(this.endX, this.endY);
    this.ctx.strokeStyle = this.color; // Set the stroke color
    this.ctx.stroke();
  }

  setStart(newX, newY) {
    this.startX = newX;
    this.startY = newY;
  }

  setEnd(newX, newY) {
    this.endX = newX;
    this.endY = newY;
  }

  setColor(newColor) {
    this.color = newColor;
  }
}

// Lines
const line = new Line(50, 50, 150, 150);

// Draw the line with the initial color on the canvas
line.add();

// Update the line's starting and ending points
line.setStart(100, 100);
line.setEnd(200, 200);

// Change the color of the line
line.setColor("red");

// Draw the updated line with the new color on the canvas
line.add();

line.setColor("purple");
add(line);

////////////////////////////////////////////////////////////////////////// mouse events
//Function to be called on mouse move
function logMessage(event) {
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  console.log(`Mouse moved at X: ${event.clientX}, Y: ${event.clientY}`);

  let drop = new Circle(50);
  drop.setPosition(mouseX, mouseY);
  drop.add();
}

// Function to attach mouse move event listener
function mouseMoveMethod(callback) {
  // Add event listener for mouse move
  canvas.addEventListener("mousemove", callback);
}

// Call the mouseMoveMethod and pass logMessage as the callback
mouseMoveMethod(logMessage);

///////////////////////////////////////////////////////////////////////// keyboard events
//Function to be called when a key is press
function handleKeyPressed(event) {
  console.log("Key pressed:", event.key);
}

// Function to attach event listener for keydown event
function keyDownMethod(callback) {
  window.addEventListener("keydown", callback);
}

// Call keyDownMethod and pass logKeyPressed as the callback
keyDownMethod(handleKeyPressed);

////////////////////////////////////////////////////////////////////////////
//Function to be called when a key is released
function handleKeyReleased(event) {
  console.log("Key released:", event.key);
}

// Function to attach event listener for keydown event
function keyUpMethod(callback) {
  window.addEventListener("keyup", callback);
}

// Call keyDownMethod and pass logKeyPressed as the callback
keyUpMethod(handleKeyReleased);
