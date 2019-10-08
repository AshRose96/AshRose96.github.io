
var alar;

       /*
        // sample example
    var sampletoon = {
       "name":"Boris",
       "r":200,
       "g":160,
       "b":200,
       "head": 60,
       "torso": 33,
       "posX":50,
       "posY":90,
       "moveX":[5,-3,4,-6,-3,3,4,-2],
       "moveY":[2,4,4,6,-3,3,4,-2]
        }
        */


 var sx = 0;
 var sy = 0;


function preload() {
  alar = loadJSON("GP2.json");
}

function setup() {
   createCanvas(400,400);
   background(0);
    rectMode(CENTER);


   console.log(alar);
   noStroke();

}



function draw() {
  background(0);

  updateToon(alar.toons[0]);
  updateToon(alar.toons[1]);
  updateToon(alar.toons[2]);

}



function updateToon(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];




       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

       drawToon(obj);

      pop();


}



function drawToon( obj) {

    //  console.log(obj.posX[s]);

  push();
        translate(obj.posX , obj.posY);
         // head
        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.head,obj.head);
        // eyes
        fill(0);
        ellipse(-10,10,5,5);
        ellipse(10,10,5,5);

        fill(obj.r,obj.g,obj.b);
        rect(0,70,obj.torso,obj.torso);
        fill(obj.r,obj.g,obj.b);
        rect(40,70,obj.hand1,obj.hand1);
        fill(obj.r,obj.g,obj.b);
        rect(-40,70,obj.hand2,obj.hand2);
        fill(obj.r,obj.g,obj.b);
        translate(10,10);
        rect(40,25,10,obj.weapon);
        // //torso
        fill(255);
        textSize(20);
        text(obj.name,0,-20);
        text(obj.phrase,5,0);

    pop();

}
