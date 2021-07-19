import { flowerpot } from "./p5setup.js";

export default class Flowerpot {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  display() {
    push();
    noStroke();
    fill(0, 0, 0, 40); //this.x .s & .y einbauen
    ellipse(this.x + 88, this.y + 172, 140, 40); //this.x .s & .y einbauen
    image(flowerpot, this.x, this.y, 200, 200); //this.x .s & .y einbauen
    pop();
  }
}
