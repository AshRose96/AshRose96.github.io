var img;
var initials ='ar'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
var sw;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('knife.jpg');  // knife.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('happyboi.png', 50,50);
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // black/default
    stroke(0);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '2') { // white
    stroke(255);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // red
    stroke(255,0,0);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { //orange
    stroke(255,98,0);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { //yellow
    stroke(255,231,0);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { //green
    stroke(0,255,0);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') { //blue
    stroke(0,0,255);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '8') { //purple
    stroke(115,0,127);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '9') { //eraser
    stroke(screenbg);
    strokeWeight(sw);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '0') { //random box
    fill(random(255), random(255), random(255), random(255));
    noStroke();
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
  }  
  for (sw=5; sw <26; sw++){
  if (toolChoice == 'm'  || toolChoice == 'M'){
    sw = sw - 1;
  } else if (toolChoice == 'n' || toolChoice == 'N'){
    sw = sw + 1;}}
 }
 

function self_portrait(){
// this function draws a self portrait when called
// you will need to call this, perhaps as one of your keypress functions
  
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color 
  } else if (key == 'z' || key == 'Z') {
    background(random(255), random(255), random(255), random(255)); // random color
  }else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
