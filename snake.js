class Snake {
    constructor(x, y, size) {
        this.size = size;
        this.direction = "down";
        this.cells = [new Cell(x, y, this.size, { fillColor: [0, 255, 0]})];
    }

    grow() {
        let head = this.getHead();

        let newHead;
        switch (this.direction) {
            case "left":
                newHead = new Cell(head.x - 1, head.y, this.size, { fillColor: [0, 255, 0] })
                break;
            case "right":
                newHead = new Cell(head.x + 1, head.y, this.size, { fillColor: [0, 255, 0] })
                break;
            case "up":
                newHead = new Cell(head.x, head.y - 1, this.size, { fillColor: [0, 255, 0] })
                break;
            case "down":
                newHead = new Cell(head.x, head.y + 1, this.size, { fillColor: [0, 255, 0] })
                break;
        }

        this.cells.unshift(newHead);
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
        let head = this.getHead();
        let lastPosX = head.x;
        let lastPosY = head.y;
        let currentPosX;
        let currentPosY;

        switch (this.direction) {
            case "left":
                head.x -= 1;
                break;
            case "right":
                head.x += 1;
                break;
            case "up":
                head.y -= 1;
                break;
            case "down":
                head.y += 1;
                break;
        }

        for (let i = 1; i < this.cells.length; i++) {
            currentPosX = this.cells[i].x;
            currentPosY = this.cells[i].y;
            
            this.cells[i].x = lastPosX;
            this.cells[i].y = lastPosY;

            lastPosX = currentPosX
            lastPosY = currentPosY
        }
    }

    getHead() {
        return this.cells[0]
    }

    render() {
        this.cells.forEach(cell => {
            cell.render();
        });
    }
}