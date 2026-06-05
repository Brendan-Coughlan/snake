class Snake {
    constructor(size) {
        this.size = size;
        this.direction = "down";
        this.cells = [];
    }

    grow() {
        this.cells.unshift(new Cell(1, 1, this.size, { fillColor: [0, 255, 0] }))
    }

    changeDirection(newDirection) {
        switch (newDirection) {
            case "left":
                if (this.direction != "right") {
                    this.direction = "left";
                }
                break;
            case "right":
                if (this.direction != "left") {
                    this.direction = "right";
                }
                break;
            case "up":
                if (this.direction != "down") {
                    this.direction = "up";
                }
                break;
            case "down":
                if (this.direction != "up") {
                    this.direction = "down";
                }
                break;
        }
    }

    move() {
        switch (this.direction) {
            case "left":
                this.cells[0].x -= 1;
                break;
            case "right":
                this.cells[0].x += 1;
                break;
            case "up":
                this.cells[0].y -= 1;
                break;
            case "down":
                this.cells[0].y += 1;
                break;
        }

        for (let i = 1; i < this.cells.length; i++) {

        }
    }

    render() {
        this.cells.forEach(cell => {
            cell.render();
        });
    }
}