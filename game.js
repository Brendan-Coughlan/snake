class Game {
    constructor(width, height, size) {
        this.grid = new Grid(width, height, size);
        this.snake = new Snake(width/2, height/2, size);
        this.food = new Cell(2, 2, size, { fillColor: [255, 0, 0]})

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
        if(this.paused || this.isGameOver)
            return;

        this.snake.changeDirection(newDirection);
    }

    checkConsumeFood() {
        if(this.grid.checkOverlap(this.snake.getHead(), this.food)) {
            this.snake.grow();
            this.food.x = 12;
            this.food.y = 12;
        }
    }

    moveSnake() {
        if(this.paused || this.isGameOver)
            return;
        
        this.snake.move();
        if(this.grid.checkOutOfBounds(this.snake.getHead())) {
            this.gameOver();
        }
    }

    render() {
        background(255);
        
        this.grid.render();
        this.food.render();
        this.snake.render();
    }
}