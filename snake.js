class Snake {
    constructor(size) {
        this.size = size;
        this.cells = [];
    }

    grow() {
        this.cells.unshift(new Cell(1, 1, this.size, { fillColor: [0, 255, 0] }))
    }

    render() {
        this.cells.forEach(cell => {
            cell.render();
        });
    }
}