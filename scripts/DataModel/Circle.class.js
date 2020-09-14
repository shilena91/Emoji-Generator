class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.filled = false;
    this.radius = 15;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.antiClockwise = true;
  }
}

export default Circle;
