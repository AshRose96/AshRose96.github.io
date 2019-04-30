var d=100;

function setup() {
  createCanvas(500,500);
  background(186,85,211);
  noStroke();

}


function draw() {
  //fill(random(255),random(255),random(255));
  fill(186,85,211);
  rect(0,0,width,height);
  //top hair
  //fill(232,182,128);
  //arc(225, 50, 80, 80, radians(180), radians(0));
  //ellipse(250,50,350,100);
  //back hair
  fill(240,209,153);
  rect(75,160,350,450);
  //neck
  fill(255,215,153);
  rect(150,300,200,300);
  //head
  fill(255,235,185);
  ellipse(250,250,350,400);
  //bangs
  fill(232,182,128);
  arc(250, 175, 350, 350, radians(180), radians(0));
  //blush
  fill(255,195,166);
  ellipse(170, 275,75,25);
  ellipse(330, 275,75,25);
  //eyebrows
  fill(205,133,63);
  arc(325, 195, 100, 50, radians(180), radians(0));
  arc(175, 195, 100, 50, radians(180), radians(0));
  fill(255,235,185);
  arc(325, 205, 100, 50, radians(180), radians(0));
  arc(175, 205, 100, 50, radians(180), radians(0));
  //eye whites
  fill(255);
  ellipse(325,225,100,50);
  ellipse(175,225,100,50);
  //iris
  //fill(random(255),random(255),random(255));
  //ellipse(325,225,50,50);
  //fill(random(255),random(255),random(255));
  //ellipse(175, 225,50,50);
  fill(176,196,222);
  ellipse(325,225,50,50);
  ellipse(175, 225,50,50);
  //pupils
  fill(0);
  ellipse(325,225,25,25);
  fill(0);
  ellipse(175,225,25,25);
  //eye shine
  fill(255);
  ellipse(320,220,15,15);
  ellipse(170,220,15,15);
  ellipse(340,240,30,15);
  ellipse(190,240,30,15);
  //eyelid
  fill(255,215,153);
  arc(325,220, 100, 50, radians(180), radians(0));
  arc(175,220, 100, 50, radians(180), radians(0));
  //nose right
  fill(232,182,128);
  triangle(250,175,250,305,295,305);
  //nose left
  fill(255,215,153);
  triangle(250,175,250,305,205,305);
  //mouth
  fill(232,134,132);
  arc(250, 360, 80, 50, radians(0), radians(180));
  //ellipse(250,360,130,50);
  fill(255,167,157);
  arc(235, 360, 50, 50, radians(180), radians(0));
  arc(265, 360, 50, 50, radians(180), radians(0));
  //hair
  fill(232,182,128,);
  arc(250, 175, 350, 350, radians(180), radians(0));
  //rect(75,50,350,100);
  fill(232,182,128);
  rect(75,160,50,450);
  rect(375,160,50,450);
  //words
  //fill(75,0,130);
  fill(random(255),random(255),random(255));
  textSize(d);
  text('sup', 25, 100);
}
