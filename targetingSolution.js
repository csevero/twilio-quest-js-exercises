class TargetingSolution {
  x;
  y;
  z;

  constructor({ x, y, z }) {
    this.z = z;
    this.x = x;
    this.y = y;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}

const m = new TargetingSolution({x: 45, y: 12, z: -1});

console.log(m.target());
