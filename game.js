class Game {
    constructor(width, height, size) {
        this.grid = new Grid(width, height, size);
        this.snake = new Snake(size);
    }

    growSnake() {
        this.snake.grow();
    }

    changenSnakeDirection(newDirection) {
        this.snake.changeDirection(newDirection);
    }

    moveSnake() {
        this.snake.move();
    }

    render() {
        background(255);
        
        this.grid.render();
        this.snake.render();
    }
}