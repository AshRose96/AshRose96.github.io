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

  var airhorn;

  var bullet;

  var mouseX;

  var mouseY;

  var mgr;

function preload() {



// snd1 = loadSound("sound/troll.mp3");

space = loadImage("images/space.jpg");



img=loadImage('images/moodboard.jpg');

ship=loadImage('images/smallRocket.png');

shot=loadImage('images/shoot.png');

boom=loadImage('images/boom.png');

sonic=loadSound('video/sonic.mp3');

oof=loadSound('video/oof.mp3');

airhorn=loadSound('video/airhorn.mp3');



}



function setup() {

  createCanvas(800, 800);

//  console.log(hell);

sonic.play();

   mgr = new SceneManager();

  // Preload scenes. Preloading is normally optional

  // ... but needed if showNextScene() is used.

  mgr.addScene (scene1);

  mgr.addScene (scene2);

 mgr.addScene (scene3);

//  mgr.addScene (scene4);

  mgr.showNextScene();



}



function draw()

{





  mgr.draw();

}



function mousePressed()

{

 // pass the mousePressed message into the SceneManager

mgr.mousePressed();

}

function loadImage() {

mgr.loadImage();

}

function loadSound(){

 mgr.loadSound();

}

function asteroidHit(){

 airhorn.play();

   for(var i=0; i<10; i++) {

     var p = createSprite(0,0);

     p.addImage(boom);

     p.setSpeed(random(3, 5), random(360));

       }

 score++;



// mgr.asteroidHit();

}



//  function mouseMoved()

//  {

//    // pass the mouseMoved message into the SceneManager

//    mgr.handleEvent("mouseDragged");

// }

//

// function mouseDragged()

// {

//    // pass the mouseMoved message into the SceneManager

//     mgr.handleEvent("mouseDragged");

// }



function keyPressed()

{

  // You can optionaly handle the key press at global level...

  switch(key)

  {

      case '1':

          mgr.showScene( scene1 );

          break;

      case '2':

          mgr.showScene( scene2 );

          break;

      case 'h':

          mgr.showScene( scene3 );

          break;

  }



  // ... then dispatch via the SceneManager.



}
