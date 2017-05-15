var king, cake, cake1;

var mainArr = new Array;
var imgArray = mainArr;

mainArr[0] = new Image();
mainArr[0].src = "cake.png";

mainArr[1] = new Image();
mainArr[1].src = "cake1.png";

var myIndex = newIndex(imgArray.length);

function preload() {
  king = loadImage("king.svg");
  kingopen = loadImage("kingopen.svg");
  //cake = loadImage("cake.png");
  //cake1 = loadImage("cake1.png");
  
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
    myIndex = newIndex(imgArray.length);
    //image(cake1, 500, 500, 200, 200);
    image(kingopen, mouseX-10, mouseY-10);
          }
  return false;
       }
}
