export default class Emotion {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.i = 0;
  }
  displaysad(express) {
    push();
    image(express[this.i], this.x, this.y, 90, 30); //this.x .s & .y einbauen
    pop();
  }
}
