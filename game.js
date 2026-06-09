class Game
{
    constructor(width, height, size)
    {
        this.grid = new Grid(width, height, size);
        this.snake = new Snake(width / 2, height / 2, size);

        this.food = new Cell(0, 0, size, { fillColor: [255, 0, 0] });
        this.spawnFoodRandomly();

        this.paused = false;
        this.isGameOver = false;
    }

    pause()
    {
        this.paused = !this.paused;
    }

    gameOver()
    {
        this.isGameOver = true;
    }

    growSnake()
    {
        this.snake.grow();
    }

    changeSnakeDirection(newDirection)
    {
        if (this.paused || this.isGameOver)
            return;

        this.snake.changeDirection(newDirection);
    }

    spawnFoodRandomly()
    {
        let randomCell = this.grid.getRandomCell();
        this.food.x = randomCell.x;
        this.food.y = randomCell.y;
    }

    checkConsumeFood()
    {
        if (this.grid.checkOverlap(this.snake.getHead(), this.food))
        {
            this.snake.grow();
            this.spawnFoodRandomly();
        }
    }

    moveSnake()
    {
        if (this.paused || this.isGameOver)
            return;

        this.snake.move();
        if (this.grid.checkOutOfBounds(this.snake.getHead()))
        {
            this.gameOver();
        }
    }

    getRandomEmptyCell()
    {
        while (true)
        {
            const randomCell = this.grid.getRandomCell();

            if (this.grid.checkOverlap(randomCell, this.food))
                continue;

            let overlapsSnake = false;

            for (const cell of this.snake.cells)
            {
                if (this.grid.checkOverlap(randomCell, cell))
                {
                    overlapsSnake = true;
                    break;
                }
            }

            if (overlapsSnake)
                continue;

            return randomCell;
        }
    }

    render()
    {
        background(255);

        this.grid.render();
        this.food.render();
        this.snake.render();
    }
}