// declare variables here
let xPos = 0

function setup() {
  // put setup code here --> this runs once upon launch

  createCanvas(500, 500);
  background(0);

  // draw ellipse



}


function draw() {
  // put drawing code here --> this loops every frame

xPos += 2

console.log(xPos);

  // draw rectangle
  background(50, 150);

  //green ellipse at center
  fill (0, 255, 255)
  ellipse(xPos, 250, 250, 250);

  // purple rectangle at cursor
  fill(mouseX, 0, mouseY)
  rect(mouseX, mouseY, 50, 50)
}


// write custom functions here
