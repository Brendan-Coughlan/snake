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

    render() {
        this.cells.forEach(row => {
            row.forEach(cell => {
                cell.render();
            });
        });
    }
}