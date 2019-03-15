PFont f;


void setup(){
  
  size(500,500);
  background(0);
  f = createFont("Georgia", 100);
  textFont(f);
  for(int i=0; i < 50; i+=5){
  
  fill(0,0,random(255),random(255));
  
  //triangle(random(width),random(height),random(30),random(100),random(255),random(255));
noStroke();
text("beep",random(255),random(255));
  }

}


void draw(){
  
  //inline
  fill(0,10);
  rect(0,0,width,height);
  for(int i=0; i < 50; i+=5){
  
  fill(0,0,random(255),random(255));
  ellipse(random(width),random(height),10,10);

  //triangle(random(width),random(height),random(30),random(100),random(255),random(255));
noStroke();
//stroke(random(255),random(255),random(255),random(255));
//text("beep",random(255),random(255));
}
 //saveFrame("ar_proj1_####.png");
 
}


void keyPressed(){
  
  
  if(key=='h' || key=='H'){
  text("beep",random(width),random(height));
  //rect(random(width),random(height),300,300);
  //fill(random(255),random(255),random(255),random(255));
  
  }
}
