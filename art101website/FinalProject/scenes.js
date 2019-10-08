// =============================================================

// =                         BEGIN SCENES                      =

// =============================================================



// exmample of global var that can be used between scenes



////////////////////////////// 1 /////////////////

var space;

var sonic;

function scene1()  {



    let loy= 0;



this.preload = function(){

  space =loadImage("../images/space.jpg");





}

    this.setup = function() {

      console.log("We are at setup for scene1");

      // do all stuff you want to initialize things,

      // as this it need to be called only once.

      background(space,00,width,height);

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





    }





    this.draw = function()

    {

      //  background(0,0,255);

        textAlign(CENTER);



        // fill(200,0,0);



        //push();

        //

        translate(width/2,height/4);

        fill(255);

        textSize(30);

        text("Asteroids", 0, 100);

        textSize(15);

        text("Click to Play", 0, 150);

        text("Press H for Instuctions", 0, 200);

        // ellipse(0,0,30,30);

        // if (loy > 255) {

        //   loy = 0;

        // } else {

        //   loy++;

        // }

        //

        //pop();





    }



    // this.keyPressed = function() {

    //

    //

    // }



    this.mousePressed = function()

    {

        this.sceneManager.showNextScene(scene2);

    }

    this.keyPressed = function()

    {

      this.sceneManager.showNextScene(scene3);

    }

}



///////////////////////  2  ////////////////////////



function scene2()  {







    this.enter = function(){

      console.log('we are entering scene2')

    }

    //Ashley Rose





this.setup = function(){
  createCanvas(800, 800);

     //  sonic.setVolume(0.5);

     // sonic.play();

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





this.draw = function(){

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

      fill(255);

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

this.mouseReleased = function(){

    }

this.mousePressed = function(){

       var shots = createSprite(ship.position.x, ship.position.y);

       shots.addAnimation('normal',shot);

       oof.play();

              shots.setSpeed(10+ship.getSpeed(), 5);

              shots.life = 30;

              //shots.add(shots);

              asteroid.overlap(shots, asteroidHit);

           }







       this.asteroidHit = function(asteroid, bullet) {

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





       this.keyPressed = function()  {



         mgr.showScene( scene2 );

       }



       }

       ////////////////////////////////3//////////////////////////////////////

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



               // push();

               //

               translate(width/2,height/3);

               fill(255);

               text("Need help?", 0, 100);

               text("Use the mouse to move. Click to shoot and pop emojis.", 0, 150);

               text("Click to continue.",0,200);





               //

               // pop();



           }



           this.mousePressed = function()  {



             mgr.showScene( scene2 );

           }



       }

        
