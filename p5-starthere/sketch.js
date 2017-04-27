var bug;

function setup() {
  createCanvas(windowWidth, windowHeight)
  bug = new Jitter();

}

function draw() {
  background(0);
  fill('#ff9999');
  ellipse(mouseX,mouseY,100)
  fill('#9999ff')
  rect(200,200,80,80)
  bug.move();
  bug.display();
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    rect(this.x, this.y, this.diameter, this.diameter);
  };
}
