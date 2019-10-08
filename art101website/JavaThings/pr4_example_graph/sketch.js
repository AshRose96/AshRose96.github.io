


// put this in your sketch.js file
// this has both bar and circle graphs


var tempArr = [60,65,76,80,12,45,90,100];
var lowValArr = [0.33,1.25,2.25,20];
var citiesArr = ["Milpitas","San Francisco","Santa Cruz","San Jose","Juneau","Sunnyvale","Novato","Dallas"];


function setup() {
  createCanvas(900,500);
  background(50);
  fill(255);
  noStroke();

  colorMode(RGB, 255);

//  console.log(tempArr);
//  console.log(citiesArr);

  push();
    translate(170,140);
//  scale(1.5);


  sdlineGraph(tempArr,citiesArr);

  fill(255);
  text("Temperature in F", -120,50);
  stroke(255);
  line(-20,45,665,45);
  pop();

  push();
  translate(170,350);

   sdEllipseGraph(tempArr,citiesArr);

   fill(255);
   text("Temperature in F", -120,50);
   stroke(255);
   line(-20,45,665,45);

    pop();


}

function draw() {
 //ellipse(width/2, height/2, 50, 50);
}


function sdlineGraph( arr, arrtext) {
    noStroke();
    colorMode(HSB, 100);
    var sc = 2.5;
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {

      console.log(arr[i]);

      // fill(255);
      // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);

      var tempC = map(arr[i],-10,115,80,0)

      //push()
    //  scale(1.2 * (i*.50));

      fill(arr[i],150,150);
      rect(i*90,0 ,10,-arr[i]);
      //rect(i*20,0+(i*20) ,10,-arr[i]);

      fill(255);
      text(arrtext[i],(i*90)-10 ,20);
      //  text(arrtext[i],(i*20)-20 ,20+(i*20));

    //  pop();

    }


}


function sdEllipseGraph( arr, arrtext) {
    noStroke();
    colorMode(HSB, 100);
    var sc = 2.5;
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {

      console.log(arr[i]);

      // fill(255);
      // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);

      var tempC = map(arr[i],0,110,60,0)

      //push()
    //  scale(1.2 * (i*.50));

      fill(arr[i],100,100);
    //  fill(60,100,100);
      ellipse(i*90,0-(arr[i]/2) ,arr[i],arr[i]);
      //rect(i*20,0+(i*20) ,10,-arr[i]);

      fill(255);
      text(arrtext[i],(i*90)-10 ,20);
      //  text(arrtext[i],(i*20)-20 ,20+(i*20));

    //  pop();

    }


}
