let game;

const DELAY = 250;
let currentDelay = 0;
let lastDelay = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game(30, 30, 25);
}

function draw() {
  if (millis() - lastDelay >= DELAY) {
    game.moveSnake();
    game.checkConsumeFood();

    lastDelay = millis();
  }
  game.render();
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      game.changeSnakeDirection("left");
      break;
    case 68:
      game.changeSnakeDirection("right");
      break;
    case 87:
      game.changeSnakeDirection("up");
      break;
    case 83:
      game.changeSnakeDirection("down");
      break;
    case 27:
    case 80:
      game.pause();
      break;
  }
}