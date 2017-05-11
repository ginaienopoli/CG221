var king;
var kingopen;
var serv1;
var serv2;
var cake;
var cake1;

function preload() {
  king = loadImage("king.svg");
  kingopen = loadImage("kingopen.svg");
  //animation must be in png format


  //cake = loadAnimation("cake.png", "cake1.png");
  //cake.playing = false;

  //cake = loadImage("cake.svg");
  //cake1 = loadImage("cake1.svg")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  cake = createSprite(600, 600);
  cake.addAnimation("shrink", "cake.png", "cake1.png");
  cake.setCollider("circle", 0,0,64);
  cake.onMouseOver = function() {
  this.changeAnimation("shrink");
  }

}


function draw() {
  background('#FFDC6B')//light yellow
  //animation(cake, 500, 150);
  image(king, mouseX-10, mouseY-10);
  drawSprites();

  if (mouseIsPressed) {
    image(kingopen, mouseX-10, mouseY-10);
    //cake.nextFrame();

       }
}
