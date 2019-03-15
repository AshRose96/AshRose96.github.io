int stime;

void setup() {
  size(400, 400);
  stime = millis();
}

void draw() {
  //background (0);
  //fill(255,20);
  // rect(0,0,width,height);
  if ((millis()- stime )>500) {
    noStroke();
    fill(random(255), random(50), random(255), random(255));
    ellipse(random(width), random(height), 20, 20);
    stime=millis();
  }
}
