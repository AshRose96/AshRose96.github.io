int count = 250;
float[] posX = new float[count]; 
float[] posY = new float[count];
float[] speedX = new float[count];
float[] speedY = new float[count];
float[] sizeW = new float[count];
float[] sizeH = new float[count];
int[] colorsR = new int[count];
int[] colorsG = new int[count];
int[] colorsB = new int[count];
int[] alpha = new int[count];

int stime;

void setup() { 
  size(1920, 1080);
  noStroke();
  color col1 = color(255, 0, 0);
  color col2 = color(55, 100, 200);
  color col3 = color(200, 30, 150);
  color col4 = color(2, 30, 150);

  for (int i=0; i < posX.length; i++) { 
    posX[i] = width/2; 
    posY[i] = height/2; 
    speedX[i] = random(-5, 5); 
    speedY[i] = random(-5, 5); 
    sizeW[i] = random(20, 25); 
    sizeH[i] = random(20, 100); 
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    alpha[i]=int(random(50, 255));
  }
  
} 
void draw() { 
  //background(255,10); 
 
  fill(255, 20); 
  rect(0, 0, width*2, height*2);
  drawCircle(width/2, 280, 10);
  aRoseBubbles();

  for (int i = 0; i < posX.length; i++) { 
    
    posX[i] += speedX[i]; 
    posY[i] += speedY[i]; 
    
    fill(colorsR[i], colorsG[i], colorsB[i], alpha[i]); 
    ellipse(posX[i], posY[i], sizeW[i], sizeW[i]); 
    

    if (posX[i] < 40+sizeW[i] || posX[i] > width ) { 
      speedX[i] = -speedX[i];
    } 
    if (posY[i] < 40+sizeW[i] || posY[i] > height) { 
      speedY[i] = -speedY[i];
    }
  }
 
//   if(frameCount<1050){
//    saveFrame("frame/test-######.png");
//  }
//println(frameCount);
translate(width / 2, height / 2);
  for (float f=0; f<200; f++){
   rotate((mouseX + mouseY) / 300.0); 
    ellipse(f,0,10,10);
  }
  
  if(frameCount>1000){
    noLoop();
    
  } else {
   return; 
  }
} 


void drawCircle(int x, int radius, int level) {                    
  fill(255);
  ellipse(width/2, height/2, radius*2, radius*2);      
}

void aRoseBubbles(){
  
   if (frameCount>500) {
    noStroke();
    fill(random(255), random(50), random(255));
    ellipse(random(width), random(height), 100, 100);
   } else {
      noStroke();
    fill(random(50), random(255), random(50));
    ellipse(random(width), random(height), 100, 100);
   }
}
