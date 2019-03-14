PFont f;
PImage b;

void setup(){
  b = loadImage("hibou-moyen-duc-tete-yt2.jpg"); 
  size(500,500);
  
  background(0);
  f = createFont("Georgia", 50);
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
  
  fill(0,30);
  rect(0,0,width,height);
  
  textAlign(RIGHT);
  arWords("Owls are very wise.", mouseX, 100);
  textAlign(CENTER);
  arWords("That is what some people say.", mouseX, 200);
  textAlign(LEFT);
  arWords("Maybe not this one.", mouseX, 300);
  
  for(int i=0; i < 50; i+=5){
  
  fill(random(255),random(255),random(255));
  ellipse(random(width),random(height),30,30);  
  noStroke();

}
 //saveFrame("ar_excercise2_####.png");
 
}


void keyPressed(){
  
  
  if(key=='h' || key=='H'){
 // text("beep",random(width),random(height));
  fill(255,60,0);
  rect(random(width),random(height),300,300);
  //fill(random(255),random(255),random(255),random(255));
  println("pressed");
  } else{
    image(b,0,0,width,height);
  }
}

void arWords(String s, int x, int y ) {
  fill(255, 0, 0);
  text(s, x, y);
  fill(200);
  rect(x, y, 5, 5);
}
