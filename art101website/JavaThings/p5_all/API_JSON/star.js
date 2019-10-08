var img;
 var star;
 var sx = 0;
 var sy = 0;




function preload() {
  img = loadImage('img/nebula2.jpg');
star = loadJSON("star.json",cbstarLoad);
}

function setup() {
   createCanvas(1920,1080);
   background(100);
image(img,0,0,width,height);
   rectMode(CENTER);
   //console.log(star);
   noStroke();

}

function cbstarLoad(data) {
  star = data;

}



function draw() {
  image(img,0,0,width,height);
// for ( var i = 0; i < star.starships.length;i++){
//   updateStarships(star.starships[i]);
//
// }
for ( var i = 0; i < 27;i++){
  updateStarships(star.starships[i]);

}
}



function updateStarships(obj) {

  drawStarships(obj);


}



function drawStarships(obj) {


if (obj.length>height){
  //size
  fill(255,0,0);
  rect(obj.xPos-8,0,25,obj.length);
}else{
  fill(50);
  rect(obj.xPos-8,0,25,obj.length);
}
if (obj.cargo_capacity>height){
  //cargo capacity
  fill(0,255,0);
  rect(obj.xPos-4,0,25,obj.cargo_capacity);
}else{
  fill(100);
  rect(obj.xPos-4,0,25,obj.cargo_capacity);
}

if (obj.crew>height){
  //crew
  fill(150,150,0);
  rect(obj.xPos,0,25,obj.crew);
}else{
  fill(150);
  rect(obj.xPos,0,25,obj.crew);
}
if (obj.passengers>height){
  //passengers
  fill(0,0,255);
  rect(obj.xPos+4,0,25,obj.passengers);
}else{
  fill(200);
  rect(obj.xPos+4,0,25,obj.passengers);
}
if (obj.cost_in_credits>height){
  //hyperdrive rating
  fill(150,50,250);
  rect(obj.xPos+8,0,25,obj.cost_in_credits);
}else{
  fill(250);
  rect(obj.xPos+8,0,25,obj.cost_in_credits);
}



//name
  push();
  translate(obj.xPos-25 , 0);
  rotate(PI / 2.0);
  fill(255);
  textSize(20);
  text(obj.name,0,-20);
  pop();
  //ship class
  push();
  translate(obj.xPos-25 , 270);
  rotate(PI / 6.0);
  fill(255);
  textSize(20);
  text(obj.starship_class,0,-20);
  pop();
  //manufacturer
  pop();
  push();
  translate(obj.xPos-25 , 540);
  rotate(PI / 6.0);
  fill(255);
  textSize(20);
  text(obj.manufacturer,0,-20);
  pop();
  //model
  pop();
  push();
  translate(obj.xPos-25 , 810);
  rotate(PI / 6.0);
  fill(255);
  textSize(20);
  text(obj.model,0,-20);
  pop();


}
