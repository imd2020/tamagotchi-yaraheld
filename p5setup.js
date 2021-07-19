window.setup = setup;
window.preload = preload;

function setup() {
  createCanvas(700, 600);
  frameRate(30);
}

let starttitle;
let flowerpot;
let tombstone;
let can;
let scissors;
let express = [];
let leaf = [];

function preload() {
  starttitle = loadImage("./font/gametitle.png");
  flowerpot = loadImage("equipment/Item0.png");
  tombstone = loadImage("./font/RIP.png");
  can = loadImage("equipment/Item1.png");
  scissors = loadImage("equipment/Item2.png");
  express[0] = loadImage("emotions/emotion1.png");
  express[1] = loadImage("emotions/emotion2.png");
  express[2] = loadImage("emotions/emotion3.png");
  express[3] = loadImage("emotions/emotion4.png");
  leaf[0] = loadImage("levels/stage0.png");
  leaf[1] = loadImage("levels/stage1.png");
  leaf[2] = loadImage("levels/stage2.png");
  leaf[3] = loadImage("levels/stage3.png");
  leaf[4] = loadImage("levels/stage4.png");
  leaf[5] = loadImage("levels/stage5.png");
  leaf[6] = loadImage("levels/stage6.png");
  leaf[7] = loadImage("levels/stage7.png");
  leaf[8] = loadImage("levels/stage8.png");
  leaf[9] = loadImage("levels/stage9.png");
  leaf[10] = loadImage("levels/stage10.png");
  leaf[11] = loadImage("levels/stage11.png");
}

export { starttitle, flowerpot, tombstone, can, scissors, express, leaf };

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
