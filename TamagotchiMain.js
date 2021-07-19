window.mouseClicked = mouseClicked;
window.draw = draw;

import Flowerpot from "./Flowerpot.js";
import Emotion from "./Emotions.js";
import Button from "./Buttonraw.js";
import Stage from "./Leaf.js";
import {
  starttitle,
  flowerpot,
  tombstone,
  can,
  scissors,
  express,
  leaf,
} from "./p5setup.js";

let gameState = "start";
let pot = new Flowerpot(200, 200, 1);
let emotion = new Emotion(255, 310, 1);
let tryagain = new Button(200, 420, 200, 50, "... try again ...");
let startgame = new Button(200, 420, 200, 50, "start game");
let playagain = new Button(360, 430, 100, 50, "play again");
let watering = new Button(450, 180, 100, 100);
let cutting = new Button(450, 300, 100, 100);
let startScreenleaf = new Stage(130, 20);
let level = new Stage(110, 20);
let counter = 0;
let r = 0;
let g = 0;
let b = 0;
let leafstate = 0; //leafstates level ++
let m = 0; //emotions level ++
let timer = 0;
let deathtimer = 0;
let opacity = 200;
let textposoverwatering = { x: 450, y: 490 };
let titlepos = { x: 65, y: -200 };

function startScreen() {
  gsap.to(titlepos, {
    duration: 2,
    ease: "power1.out",
    y: 190,
  });
  pot.display();
  emotion.i = 1;
  emotion.displaysad(express);
  startScreenleaf.l = 1;
  startScreenleaf.levelDisplay(leaf);
  startgame.display();
  startgame.hitTest();
  image(starttitle, titlepos.x, titlepos.y, 460, 155);
}
function gameScreen() {
  pot.display();
  fill(255);
  textSize(22);
  textFont("duper");
  text("     try to water the plant \nwith just the right amount ", 190, 50);
  image(can, 458, 195, 80, 60);
  image(scissors, 468, 310, 95, 75);
  watering.display();
  cutting.display();
  emotion.i = m;
  emotion.displaysad(express);
  level.l = leafstate;
  level.levelDisplay(leaf);
  if (leafstate === 11) {
    fill(0, 0, 0, 200);
    rect(450, 180, 100, 100, 10);
  }
  fill(0, 0, 0, opacity);
  rect(450, 300, 100, 100, 10);
}
function deathScreen() {
  pot.display();
  image(tombstone, 250, 132, 100, 100);
  fill(255);
  textSize(22);
  textFont("duper");
  text("Don't give up and better luck next time!", 140, 90);
  emotion.i = 3; //greift auf das i in der class zu
  emotion.displaysad(express);
  tryagain.display();
}
function victoryScreen() {
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
  ellipse(158, 472, 140, 40);
  ellipse(395, 335, 110, 30);
  image(flowerpot, 70, 300, 200, 200);
  image(express[2], 125, 400, 90, 30);
  image(flowerpot, 330, 205, 150, 150);
  image(express[1], 370, 280, 70, 25);
  image(leaf[6], -30, 120, 400, 550);
  image(leaf[2], 245, 52, 350, 460);
  playagain.display();
}
function moistureMeter() {
  counter -= 5 / 30;
  if (counter <= 1) {
    counter = 0;
  }
  noStroke();
  if (counter >= 0 && counter <= 200) {
    r = 220;
    g = 30;
    b = 50;
    m = 0;
    deathtimer += 1 / 30; //länger las 30 sekunden = death
  } else if (counter > 200 && counter <= 300) {
    r = 115;
    g = 170;
    b = 70;
    m = 2;
    timer += 1 / 30; // länger als 20 sekunden = nextlevel
  } else if (counter > 300) {
    r = 70;
    g = 150;
    b = 240;
    m = 0;
    deathtimer += 1 / 30; // länger als 30 sekunden = death
    fill(255);
    textSize(12);
    text(
      "please stop!\n you are drowning \n our little friend ",
      textposoverwatering.x,
      textposoverwatering.y
    );
  } else if (counter > 500) {
    r = 70;
    g = 150;
    b = 240;
    m = 0;
    deathtimer += 1 / 30; // länger als 30 sekunden = death
  }
  fill(r, g, b, 100);
  rect(100, 450, counter + 10, 20, 10);
}
function levelUpOrDeath() {
  if (counter > 200 && counter <= 300 && timer >= 5) {
    leafstate += 1;
    counter = 0;
    timer = 0;
    deathtimer = 0;
  }
  if (deathtimer >= 10) {
    gameState = "death";
    deathtimer = 0;
    counter = 0;
    timer = 0;
    r = 0;
    g = 0;
    b = 0;
    leafstate = 0; //leafstates level ++
    m = 0;
  }
  if (leafstate === 11) {
    opacity = 20;
    watering.hitTest = false;
  }
}
function textBounce() {
  gsap.to(textposoverwatering, {
    duration: 0.5,
    ease: "bounce",
    y: 500,
  });
}
function mouseClicked() {
  if (startgame.hitTest()) {
    gameState = "game";
  } else if (leafstate === 11 && cutting.hitTest()) {
    gameState = "victory";
  } else if (playagain.hitTest()) {
    leafstate = 0;
    opacity = 200;
    gameState = "start";
  } else if (tryagain.hitTest()) {
    leafstate = 0;
    opacity = 200;
    gameState = "start";
  }
  if (leafstate <= 11 && watering.hitTest()) {
    counter = counter + 20;
    textBounce();
    textposoverwatering.y = 490;
    // console.log(counter);
  }
}
function draw() {
  background(19, 41, 45);
  levelUpOrDeath();
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "game") {
    moistureMeter();
    gameScreen();
  } else if (gameState === "death") {
    deathScreen();
  } else if (gameState === "victory") {
    victoryScreen();
  }
}