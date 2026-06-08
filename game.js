class Game {
    constructor(width, height, size) {
        this.grid = new Grid(width, height, size);
        this.snake = new Snake(size);

        this.paused = false;
    }

    pause() {
        this.paused = !this.paused;
    }

    growSnake() {
        this.snake.grow();
    }

    changenSnakeDirection(newDirection) {
        if(this.paused)
            return;

        this.snake.changeDirection(newDirection);
    }

    moveSnake() {
        if(this.paused)
            return;
        
        this.snake.move();
    }

    render() {
        background(255);
        
        this.grid.render();
        this.snake.render();
    }
}