class Game {
    constructor(width, height, size) {
        this.grid = new Grid(width, height, size);
        this.snake = new Snake(size);
    }

    growSnake() {
        this.snake.grow();
    }

    render() {
        this.grid.render();
        this.snake.render();
    }
}