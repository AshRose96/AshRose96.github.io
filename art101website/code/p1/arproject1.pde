char currentkey = '1';

color bgc = color(255);

void setup() {

size(700,700);
background(255);
smooth();
}

void draw() {

// triggering the clear_print function
if(keyPressed) {
arClear(); 
}
// triggering the newkeychoice
if(mousePressed) {
  arDraw(); 
}
//saveFrame("ar_project1_####.png");
}


void arDraw() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
 
   
 // key global variable contains whatever key was last pressed 
 char currentkey = key;
   
switch(currentkey) {
case 'q': 
  println("1");  // black 
  arLine(color(0), mouseX, mouseY, pmouseX, pmouseY); 
  break;
case 'w': 
  println("2");  // red
  arLine(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'e': 
  println("2");  // orange
  arLine(color(255,98,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'r': 
  println("2");  // yellow
  arLine(color(255,231,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
  case 'a': 
  println("2");  // green
  arLine(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 's': 
  println("2");  // blue
  arLine(color(0,0,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
  case 'd': 
  println("2");  // purple
  arLine(color(115,0,127), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'f': 
  println("3");  // erase with bg color
  arErase(bgc,mouseX, mouseY,25);
  break;
default:             // Default executes if the case labels
  println("None");   // don't match the switch parameter
  break;   
}
  
}


void arLine(color k, int lx,int ly, int px,int py) {
  strokeWeight(20);
  stroke(k);
  line(lx, ly, px, py); 
}


void arErase(color k,int lx,int ly,int sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz); 
}


void arClear() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'z' || key == 'Z') {
     background(255);
  } else if (key == 'p' || key == 'P') {
     saveFrame("ar_paint_####.png");
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
     delay(500);
  }


}


void keyPressed(){
  
  if (key == 'c' || key == 'C') {
     rect(random(width),random(height),50,50);
  }
  
  
}



 
