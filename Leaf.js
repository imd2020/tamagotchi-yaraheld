export default class Stage {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.l = 0;
    // this.leaf = [];
  }
  levelDisplay(leaf) {
    push();
    image(leaf[this.l], this.x, this.y, 400, 550);
    pop();
  }
}
