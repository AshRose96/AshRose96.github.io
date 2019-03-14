char currentkey = '1';

color bgc = color(255);

void setup() {

size(700,700);
background(255);
smooth();
}

void draw() {
saveFrame("ar_project1_####.png");
// triggering the clear_print function
if(keyPressed) {
clear_print(); 
}
// triggering the newkeychoice
if(mousePressed) {
  drawChoice(); 
}
}


void drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
 
   
 // key global variable contains whatever key was last pressed 
 char currentkey = key;
   
switch(currentkey) {
case 'q': 
  println("1");  // black 
  drawFatLine(color(0), mouseX, mouseY, pmouseX, pmouseY); 
  break;
case 'w': 
  println("2");  // red
  drawFatLine(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'e': 
  println("2");  // orange
  drawFatLine(color(255,98,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'r': 
  println("2");  // yellow
  drawFatLine(color(255,231,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
  case 'a': 
  println("2");  // green
  drawFatLine(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 's': 
  println("2");  // blue
  drawFatLine(color(0,0,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
  case 'd': 
  println("2");  // purple
  drawFatLine(color(115,0,127), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'f': 
  println("3");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
  break;
default:             // Default executes if the case labels
  println("None");   // don't match the switch parameter
  break;   
}
  
}

void drawline(color k, int lx,int ly, int px,int py) {
 // strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py); 
}

void drawFatLine(color k, int lx,int ly, int px,int py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py); 
}


void eraser(color k,int lx,int ly,int sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz); 
}


void clear_print() {

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



 
