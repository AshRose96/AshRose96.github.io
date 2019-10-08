function setup(){
createCanvas(1200,600);
background(128);
noStroke();
}




function draw(){
  var s = second();
  var m = minute();
  var h = hour();

  push();
 var counterA = 0;
 var counterB = 0;
 var counterC = 0;
 for (let i = 0; i < 10; i++) {
 for (let j = 0; j < 6; j++ ) {

   console.log(counterA);
    counterA++;

   if (counterA > s+1) {
    fill(80,1,130);
     } else {
    fill(0,191,255,20);
    }

    rect(i*40+800, j*100, 40, 100);

 }

 }
 for (let k = 0; k < 10; k++) {
 for (let l = 0; l < 6; l++ ) {

   console.log(counterB);
    counterB++;

   if (counterB > m+1) {
    fill(80,1,130);
     } else {
    fill(255,255,0,20);
    }
    rect(k*40+400, l*100, 40, 100);

 }

 }
 for (let n = 0; n < 4; n++) {
 for (let o = 0; o < 6; o++ ) {

   console.log(counterC);
    counterC++;

   if (counterC > h+1) {
    fill(80,1,130);
     } else {
    fill(220,20,60,20);
    }
    rect(n*100, o*100, 100, 100);

 }

 }
}
