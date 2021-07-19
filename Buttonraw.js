export default class Button {
  constructor(x, y, width, height, title) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.title = title;
  }
  display() {
    push();

    noStroke();
    // rectMode(CENTER);
    fill(255, 255, 255, 40);
    rect(this.x, this.y, this.width, this.height, 10);
    textAlign(CENTER);
    fill(255);
    textSize(22);
    textFont("duper");
    text(this.title, this.x + this.width / 2, this.y + this.height / 1.7);
    pop();
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      return true;
    }
    return false;
  }
}
