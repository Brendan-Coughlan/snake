class Cell {
    constructor(x, y, size, { fillColor = [255, 255, 255] } = {}) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fillColor = fillColor;
    }

    render() {
        const px = this.x * this.size;
        const py = this.y * this.size;
        fill(this.fillColor);
        rect(px, py, this.size, this.size);
    }
}