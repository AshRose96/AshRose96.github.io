arTri t1;
int stime;
int numT=50;
int counter;
arTri[] tri = new arTri[numT];
float[] speedXlist = {0.0, 0.0};
float[] speedYlist = {0.0, 0.0};
float[] blocXlist = {0.0, 0.0}; 
float[] blocYlist = {0.0, 0.0};



void setup() {
  size(600, 600);
  stime = millis();
  noStroke();
  color col = color(200, 50, 255);
   for (int i = 0; i < tri.length; i++) {
  tri[i] = new arTri();
   t1 = new arTri();
   }
   speedXlist[0] = random(-5,5); 
speedYlist[0] = random(-5,5); 
blocXlist[0] = width/2; 
blocYlist[0] = height/2; 
}

void draw() {
  //   if(frameCount<1050){
  //  saveFrame("frame/e3-######.png");
  //}
  //background (0);
  fill(255,20);
   rect(0,0,width,height);
   for (int i = 0; i < tri.length; i++) {
  tri[i].update();
   }
  //if ((millis()- stime )>500) {
  //  noStroke();
  //  fill(random(255), random(50), random(255), random(255));
  //  ellipse(random(width), random(height), 20, 20);
  //  stime=millis();
  //}
 // if ( (millis() - stime) > 100 ) {
if ((blocXlist[0]< 0)||(blocXlist[0] > width)) { 
speedXlist[0] = -speedXlist[0]; 
} 
if ((blocYlist[0]< 0) || (blocYlist[0] > height)) { speedYlist[0] = -speedYlist[0]; 
} 
    pushMatrix();
    fill(255,0,0,120);
    rotate(radians(counter-5));
    blocXlist[0] += speedXlist[0];
    blocYlist[0] += speedYlist[0]; 
    rect(blocXlist[0], blocYlist[0],50,50);
    popMatrix();
    counter++;
    //stime = millis(); 
 // }
   if(frameCount<1001){
      saveFrame("framez/test-######.png");
    }
  println(frameCount);
}


class arTri {
  float r = random(600);
  float x= random (600);
  float y = 0;

  void update() {
    y = y + 7;
    fill(200, 10, 250, 120);
    triangle(r, y,15,15, 10, 10);
    if(y>height) {
      y=0;
  }
}
}
