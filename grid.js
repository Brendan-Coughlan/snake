class Grid {
    constructor(width, height, size) {
        this.width = width;
        this.height = height;
        this.size = size;

        this.cells = this.generateNewGrid(width, height, size);
    }

    generateNewGrid(width, height, size) {
        let cells = [];
        for (let i = 0; i < width; i++) {
            let newRow = [];

            for (let j = 0; j < height; j++) {
                newRow.push(new Cell(i, j, size));
            }

            cells.push(newRow);
        }
        return cells;
    }

    checkOutOfBounds(targetCell) {
        if(targetCell.x <= 0 || targetCell.x >= this.width || targetCell.y <= 0 || targetCell.y >= this.height)
            return true;
        return false;
    }

    render() {
        this.cells.forEach(row => {
            row.forEach(cell => {
                cell.render();
            });
        });
    }
}