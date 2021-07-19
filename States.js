class State {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // starttitle = loadImage("./font/gametitle.png");
  }
  startScreenDisplay() {
    pot.display();
    emotion.i = 1;
    emotion.displaysad(express);
    startScreenleaf.l = 1;
    startScreenleaf.levelDisplay(leaf);
    startgame.display();
    startgame.hitTest();
    image(starttitle, this.x, this.y, this.width, this.height);
  }
  gameScreenDisplay() {
    pot.display();
    fill(255);
    textSize(22);
    textFont("duper");
    text("     try to water the plant \nwith just the right amount ", 180, 80);
    image(can, this.x, this.y, this.width, this.height);
    image(
      scissors,
      this.x + 10,
      this.y + 115,
      this.width + 15,
      this.height + 15
    );
    watering.display();
    watering.hitTest();
    cutting.display();
    emotion.i = m;
    emotion.displaysad(express);
    level.l = n;
    level.levelDisplay(leaf);

    fill(0, 0, 0, opacity);
    rect(this.x - 8, this.y + 105, 100, 100, 10);
    if (opacity === 0) {
      cutting.hitTest();
    }
  }
  deathScreenDisplay() {
    pot.display();
    image(tombstone, this.x + 180, this.y + 82, 100, 100);
    fill(255);
    textSize(22);
    textFont("duper");
    text("Don't give up and better luck next time!", 140, 90);
    emotion.i = 3; //greift auf das i in der class zu
    emotion.displaysad(express);
    tryagain.display();
    tryagain.hitTest();
  }
  victoryScreenDisplay() {
    fill(255);
    textSize(22);
    textFont("duper");
    text(
      "Good job! \n  \nNow you can share your \nplant with a friend!",
      50,
      100
    );
    noStroke();
    fill(0, 0, 0, 40);
    ellipse(this.x + 88, this.y + 172, 140, 40);
    ellipse(this.x + 325, this.y + 35, 110, 30);
    image(flowerpot, this.x, this.y, this.width, this.height);
    image(
      express[2],
      this.x + 55,
      this.y + 100,
      this.width - 110,
      this.height - 170
    );
    image(
      flowerpot,
      this.x + 260,
      this.y - 95,
      this.width - 50,
      this.height - 50
    );
    image(
      express[1],
      this.x + 300,
      this.y - 20,
      this.width - 130,
      this.height - 175
    );
    image(
      leaf[6],
      this.x - 100,
      this.y - 180,
      this.width + 200,
      this.height + 350
    );
    image(
      leaf[2],
      this.x + 175,
      this.y - 248,
      this.width + 150,
      this.height + 260
    );
    playagain.display();
    playagain.hitTest();
  }
}