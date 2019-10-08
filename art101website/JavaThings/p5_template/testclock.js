var counter = -90;


function setup() {
  createCanvas(700,700);
  background(20);
  fill(255);
  noStroke();

  angleMode(DEGREES);



}

function draw() {
//   background(0);

   var s = second();
   var m = minute();
   var h = hour();
   var past12;
   var hour12;

  if ( h == 12) {
    hour12 = h;
    past12 = "PM";
    console.log("Noon");
  } else if ( h == 0 ) {
    hour12 = 12;
    past12 = "AM";
} else  {

   if (h > 11) {

      hour12 = h-12;
      past12 = "PM";
     console.log("afternoon");
   } else {
     hour12 = h;
     past12 = "AM";
   }

 }

  // console.log( hour12 + " hours " + m + " min " + s + " sec " + " " + past12);

   // let mh = map(h, 0,23, 0, width);
   // let mm = map(m, 0,59, 0, width);
   // let ms = map(s, 0,59, 0, width);

   let mh = map(hour12, 0,12, -90, 270);
   let mm = map(m, 0,59, -90, 270);
   let ms = map(s, 0,59, -90, 270);

   let mc = map(s, 0,59, 0, 100);


  // console.log(ms);

 //ellipse(width/2, height/2, 50, 50);


// secs 0-59
// min 0-59
// hours 0-23

  if ( past12 == "PM") {

  // background(0,0,80);

  } else {
//   background(255,255,0);

  }


 colorMode(RGB, 255);
push(); // Start a new drawing state
   //strokeWeight(10);
   fill(204, 0, 0);
   translate(width/2, height/2);
   rotate(mh);
   rect(0, 0, 200,50); // Middle circle
pop(); // Restore original state

console.log(counter);

//counter ++;

if ( counter > 270 ) {
  counter = -90;
}


push(); // Start a new drawing state
   //strokeWeight(10);
   fill(0, 255, 0,120);
   translate(width/2, height/2);
    rotate(mm);
   rect(0, 0, 200,50); // Middle circle
pop(); // Restore original state


colorMode(HSB, 100);

push(); // Start a new drawing state
   //strokeWeight(10);
   fill(mc, 100,100,20);
   translate(width/2, height/2);
    rotate(ms);
   rect(0, 0, 300, 50); // Middle circle
pop(); // Restore original state

}
