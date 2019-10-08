//Ashley Rose




var ship;
var asteroids = [];
var shots = [];
var score=0;
var img;
var asteroid;
var ship;
var shots;
var shot;
var direction = 90;
var boom;

function preload(){

img=loadImage('images/moodboard.jpg');
ship=loadImage('images/smallRocket.png');
shot=loadImage('images/shoot.png');
boom=loadImage('images/boom.png');
sonic=loadSound('video/sonic.mp3');
// Ashley Linder
oof=loadSound('video/oof.mp3');
airhorn=loadSound('video/airhorn.mp3');
}


function setup() {
  createCanvas(800, 800);
    sonic.setVolume(0.5);
  sonic.play();

  sonic.setVolume(0.5);
sonic.play();
  asteroid= new Group();
  shots= new Group();
  ship = createSprite(width/2,height/2, 10,10);



  ship.addAnimation('normal','images/smallRocket.png');





  for(var j = 0; j<50; j++) {

     var newAst = createSprite(random(0, width), random(0, height));

     newAst.addAnimation('floating', 'images/ast001.png', 'images/ast005.png');

     //set a rotation speed

     newAst.rotationSpeed = -2;

     //another way to add a sprite to a group

     newAst.addToGroup(asteroid);

   }

  }





function draw() {

  background(0)

  if(score>0){

    background(img,0,0,width,height)

  }



    //asteroid[i].update();







  ship.position.x = mouseX;

  ship.position.y = mouseY;

  //since the force keeps incrementing the speed you can

  //set a limit to it with maxSpeed

  ship.maxSpeed = 5;



  //draw the sprite

  drawSprites();

  rect(200,700,120,70);

  fill(0);

  textFont('Roboto');

  textSize(50);

  text(score,230,750);

  for(var i=0; i<allSprites.length; i++) {

    var s = allSprites[i];

    if(s.position.x<0) s.position.x = width;

    if(s.position.x>width) s.position.x = 0;

    if(s.position.y<0) s.position.y = height;

    if(s.position.y>height) s.position.y = 0;

  }

  for(var j = 0; j<asteroid.length; j++) {

    var a = asteroid[j];

    a.position.y += sin(frameCount/10);

    a.position.x = a.position.x-5;

  }



console.log(score);







}

function mouseReleased(){

}

function mousePressed() {

   var shots = createSprite(ship.position.x, ship.position.y);

   shots.addImage(shot);

//Ashley Linder

   oof.play();

   shots.setSpeed(10+ship.getSpeed(), 5);

   shots.life = 30;

   // shots.add(shots);

   asteroid.overlap(shots, asteroidHit);

}







function asteroidHit(asteroid, bullet) {

//Ashley Linder

airhorn.play();

  for(var i=0; i<10; i++) {

    var p = createSprite(bullet.position.x, bullet.position.y);

    p.addImage(boom);

    p.setSpeed(random(3, 5), random(360));

      }

score++;

  bullet.remove();

  asteroid.remove();

}
