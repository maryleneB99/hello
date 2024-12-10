function setup() {
  createCanvas(400, 400);
}

  
function draw() {
  background(220);

  drawStar(200, 75);    
  drawStar(150, 300);    
  drawHeart();           
  drawCloud(300, 200, 100, 50); 
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

  function drawCloud(x, y, w, h) {
    fill(255, 255, 255, 200); 
    noStroke();
  
    ellipse(x - w * 0.3, y, w * 0.6, h);
    ellipse(x + w * 0.3, y, w * 0.6, h);
    ellipse(x - w * 0.15, y - h * 0.5, w * 0.5, h * 0.7);
    ellipse(x + w * 0.15, y - h * 0.5, w * 0.5, h * 0.7);
    ellipse(x, y - h * 0.2, w * 0.8, h);
  }


