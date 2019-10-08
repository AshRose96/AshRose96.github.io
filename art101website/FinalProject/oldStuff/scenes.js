
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
var img;
////////////////////////////// 1 /////////////////
function scene1()  {

    let loy= 0;

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;
        loy = 0;
        background("blue");

    }


    this.draw = function()
    {
        background(0,0,255-loy);
        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("opposite star wars scroll", 0, 100);
        text("Click to Continue", 0, 150);
        // ellipse(0,0,30,30);
        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();


    }

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {

this.preload = function(){
  img = loadImage("Rose_TenX_11.jpg");
}

  this.setup = function() {

      background(img,0,0,width,height);
      console.log("We are at setup for scene2");


  }

  this.enter = function()
  {

      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      background(img,0,0,width,height);
      noStroke();

    }

    this.mouseDragged = function() {
      console.log("mouseDragged");

    }

    this.mousePressed = function()
    {

      //console.log("exit");
      this.sceneManager.showNextScene();
    }



  // this.keyPressed = function()  {
  //
  //       // switch(key)
  //       // {
  //       //     case 'h':
  //       //         mgr.showScene( scene3 );
  //       //     //     break;
  //       //     // case '2':
  //       //     //     mgr.showScene( scene2 );
  //       //     //     break;
  //       //     // case '3':
  //       //     //     mgr.showScene( scene3 );
  //       //     //     break;
  //       // }
  //
  //       // ... then dispatch via the SceneManager.
  //
  //   }





}






////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");




    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");
    }




    this.draw = function() {
      background(0,0,255-loy);
      textAlign(CENTER);
      textSize(29);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("Wiggle the mouse to get their attention...", 0, 100);
        text("Click the mouse or hit 'H' to go back.", 0, 150);

        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }
        //
        pop();

    }

    this.mousePressed = function()  {

      mgr.showScene( scene2 );
    }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}

function scene4(){

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene4");




    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene4");
    }




    this.draw = function() {
      background(0,0,255-loy);
      textAlign(CENTER);
      textSize(29);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("you died game over", 0, 100);
        text("Click the mouse return to title", 0, 150);

        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }
        //
        pop();

    }

    this.mousePressed = function()  {

      mgr.showScene( scene2 );
    }





}
