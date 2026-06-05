let game;

const DELAY = 250;
let currentDelay = 0;
let lastDelay = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game(30, 10, 25);
  game.growSnake();
}

function draw() {
  if (millis() - lastDelay >= DELAY) {
    game.moveSnake();

    lastDelay = millis();
  }
  game.render();
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      game.changenSnakeDirection("left");
      break;
    case 68:
      game.changenSnakeDirection("right");
      break;
    case 87:
      game.changenSnakeDirection("up");
      break;
    case 83:
      game.changenSnakeDirection("down");
      break;
  }
}