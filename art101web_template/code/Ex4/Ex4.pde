// frameCount
// millis();
int stime;
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
int i;
void setup() {
  size(600, 600);
   noStroke();
    for (int i=0; i < posX.length; i++) { 
    posX[i] = width/2; 
    posY[i] = height/2; 
    speedX[i] = random(-5, 5); 
    speedY[i] = random(-5, 5); 
    sizeW[i] = random(20, 25); 
    sizeH[i] = random(20, 25); 
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    alpha[i]=int(random(50, 255));
  }
}  


void draw() {
fill(255,20);
rect(0,0,width,height);

  println(frameCount);
   //if ( frameCount <  1500) {
   //saveFrame("frame/ex4-######.png");
   //}
  for(int i = 0; i < posX.length; i++){
  if (frameCount>1000) {
       
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
  
  }  if (frameCount>500) { 

        
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
