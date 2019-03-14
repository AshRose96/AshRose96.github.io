float randR=0;
float randG=0;
float randB=0;
float randA=0;
String gridName = "Gary";


void setup() {
  size(800, 800);
  background(0, 0, 100);
 
  //noStroke();
for (int i=0; i < height; i+=20) {
  fill(255-i);
  rect(400, i, width/2, 10);
  fill(255-i);
  rect(i, 400, 10, height/2);
  
  
  Float a = 0.0;
   float inc = TWO_PI/10.0;
  
    for (int e=0; e<width; e+=4) {
    line(e, 200, e, 200+sin(a)*60.0);
    //println(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;
    stroke(255);}
    
  
  

  }
}
void draw() {
  for (int i = 0; i < width; i += 20) {
    for (int j = 0; j < height/2; j += 20) {
      randR = random(255);
      randG = random(255);
      randB = random(255);
      randA = random(255);
      fill(randR,randG,randB,randA);
      rect( i, j, 10, 10 );
     // println(gridName + ", now has a fill value of " + randR);
     
     ellipse(mouseX,mouseY,50,50);
     fill(randR,randG,randB,randA);
     noStroke();
     
     
      
     
    }
  }
}
