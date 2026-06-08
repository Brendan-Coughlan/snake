class Game {
    constructor(width, height, size) {
        this.grid = new Grid(width, height, size);
        this.snake = new Snake(size);

        this.paused = false;
        this.isGameOver = false;
    }

    pause() {
        this.paused = !this.paused;
    }

    gameOver() {
        this.isGameOver = true;
    }

    growSnake() {
        this.snake.grow();
    }

    changeSnakeDirection(newDirection) {
        if(this.paused)
            return;

        this.snake.changeDirection(newDirection);
    }

    moveSnake() {
        if(this.paused)
            return;
        
        this.snake.move();
        if(this.grid.checkOutOfBounds(this.snake.getHead())) {
            this.gameOver();
        }
    }

    render() {
        background(255);
        
        this.grid.render();
        this.snake.render();
    }
}