
function setup(){
createCanvas(1200,600);
background(80,1,130);
noStroke();
}




function draw(){
  background(80,1,130,20);
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
    fill(80,1,130,20);
     } else {
    fill(0,191,255);
    }

    rect(i*120, j*100, 120, 50);

 }

 }
 for (let k = 0; k < 10; k++) {
 for (let l = 0; l < 6; l++ ) {

   console.log(counterB);
    counterB++;

   if (counterB > m+1) {
    fill(80,1,130,20);
     } else {
    fill(255,255,0,100);
    }
    rect(k*120, l*100, 120, 100);

 }

 }
 for (let n = 0; n < 4; n++) {
 for (let o = 0; o < 6; o++ ) {

   console.log(counterC);
    counterC++;

   if (counterC > h+1) {
    fill(80,1,130,20);
     } else {
    fill(220,20,60);
    }
    rect(n*300, o*100, 100, 100);

 }

 }
}
