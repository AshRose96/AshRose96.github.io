var i;
var img;
var count = 250;
var posX = new Array(count);
var posY = new Array(count);
var speedX = new Array(count);
var speedY = new Array(count);
var sizeW = new Array(count);
var sizeH = new Array(count);
var colorsR = new Array(count);
var colorsG = new Array(count);
var colorsB = new Array(count);
var alpha = new Array(count);



function preload(){
img=loadImage('waaah.png');

}



function setup() {
  createCanvas(600, 600);
  image(img,0,0,width,height);
  noStroke();
  for (let i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    colorsR[i] = random(0, 255);
    colorsG[i] = random(0, 255);
    colorsB[i] = random(0, 255);
    alpha[i] = random(50, 255);
  }
}
function draw() {
  // background(255,10);
 fill(255, 20);
 rect(0, 0, 600, 600);
image(img,0,0,width,height);
  for(let i = 0; i < posX.length; i++){
  if (millis()>120000) {

    //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    //draw all balls
    fill(colorsR[i], colorsG[i], colorsB[i], alpha[i]);
    noStroke();
    ellipse(posX[i], posY[i], sizeW[i], sizeW[i]);


    if (posX[i] < sizeW[i]/2 || posX[i] > width ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < sizeW[i]/2 || posY[i] > height) {
      speedY[i] = -speedY[i];
    }

  }  if (millis()>60000) {


    //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    //draw all balls
    fill(colorsR[i], colorsG[i], colorsB[i], alpha[i]);
    noStroke();
    rect(posX[i], posY[i], sizeW[i], sizeW[i]);


    if (posX[i] < sizeW[i]/2 || posX[i] > (width)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < sizeW[i]/2 || posY[i] > (height)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
    }

  } else {

    //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    //draw all balls
    stroke(colorsR[i], colorsG[i], colorsB[i], alpha[i]);
    line(posX[i], posY[i], sizeW[i], sizeW[i]);
    //check boundaries for all balls

    if (posX[i] < sizeW[i]/2 || posX[i] > width ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < sizeW[i]/2 || posY[i] > height) {
      speedY[i] = -speedY[i];
    }
  }
  }
}
