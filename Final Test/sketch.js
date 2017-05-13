var king, cake, cake1;

function preload() {
  king = loadImage("king.svg");
  kingopen = loadImage("kingopen.svg");
  //animation must be in png format
  
  cake = loadImage("cake.png");
  cake1 = loadImage("cake1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  }



function draw() {
  background('#FFDC6B')//light yellow
  image(cake, 500, 500, 200, 200);
  image(king, mouseX-10, mouseY-10);


  if (mouseIsPressed) {
    var d = dist(mouseX, mouseY, 500, 500);
  if (d < 100) {
    image(cake1, 500, 500, 200, 200);
    image(kingopen, mouseX-10, mouseY-10);
          }

       }
  if (mouseReleased){
    if (d < 100) {
    image(cake1, 500, 500, 200, 200);
    image(king, mouseX-10, mouseY-10);
}
