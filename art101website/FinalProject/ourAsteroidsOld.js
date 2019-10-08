//Ashley Rose


var score=0;
var lives;
var player;
var scoreboard;
var enemies;


function preload() {
  enemies = loadJSON("enemies.json");
}

function setup(){
createCanvas(800,800);
background(255);



}



function draw(){

  rect(50,650,300,50);
  fill(0);
  stroke(255);


  if (score<=0){
    rect(0,0,width,600);
    fill(0);
    noStroke();
  } else if (score>0){
    rect(0,0,800,600);
    fill(random(255),random(255),random(255))
  }
  updateEnemy(enemies.enemy[0]);
  updateEnemy(enemies.enemy[1]);
  updateEnemy(enemies.enemy[2]);



}

function updateEnemy(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];




       if (obj.posX > 775) {
         obj.posX = 775;
       }

       if (obj.posX < 25) {
         obj.posX = 25;
       }

       if (obj.posY > 525) {
         obj.posY = 525;
       }

       if (obj.posY < 25) {
         obj.posY = 25;
       }

       drawEnemy(obj);

      pop();


}



function drawEnemy( obj) {

    //  console.log(obj.posX[s]);

  push();
        translate(obj.posX , obj.posY);
         //body
        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.body,obj.body);


    pop();

}
