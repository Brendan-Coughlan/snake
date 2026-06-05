let grid;

function setup() {
  createCanvas(displayWidth, displayHeight);
  game = new Game(10, 10, 25);
  game.growSnake();
}

function draw() {
  game.render();
}