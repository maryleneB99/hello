function setup() {
  createCanvas(400, 400);
}

  
  function draw() {
    background(220);
  
    drawStar(200,75);
    drawStar(150,300);
  
  }
  
  function drawStar(tx,ty) {
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