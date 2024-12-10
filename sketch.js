function setup() {
  createCanvas(400, 400);
}

  
  function draw() {
    background(220);
  
    drawStar(200,75);
    drawStar(150,300);
    drawHeart();
  
  }

  function drawHeart() {
    noStroke();
    circle(50, 50, 50);
    circle(100, 50, 50);
    triangle(25, 55, 125, 55, 75, 150);
  }
  
  function drawStar(tx,ty) {
    stroke(1);
    push();
    translate(tx,ty);
    strokeWeight(2);
    line(0-10,0,0+10,0);
    line(0,0-10,0,0+10);
    line(0-10,0-10,0+10,0+10);
    line(0-10,0+10,0+10,0-10);
    pop();
  }



//draw a star