
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,snd1;
// var duration;
// var  slideWidth = 500;
var img;
function preload() {

  // snd1 = loadSound("sound/troll.mp3");
img =loadImage("Rose_TenX_11.jpg");

}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
  background(img,0,0,width,height);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.showNextScene();

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

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
        case '3':
            mgr.showScene( scene3 );
            break;
        case 'h':
            mgr.showScene( scene3 );
            break;
        case 'H':
            mgr.showScene( scene3 );
            break;
         case '4':
            mgr.showScene( scene4 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
