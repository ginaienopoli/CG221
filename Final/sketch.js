var king;
var serv1 = "serv1.svg";
var serv2 = "serv2.svg";
var cheese = "cheese.svg";


function preload() {
  king = loadImage("king.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  //king = loadImage("king.svg");
  //king = new mousePressed();
  // serv1 = new mousePressed();
  // serv2 = new mousePressed();
  // cheese = new mousePressed();
  // y = height;

}


function draw() {
  background(0);//yellow


  if (mouseIsPressed) {
    image(king, mouseX, mouseY);
  }

}

// When the user clicks the mouse
// function mousePressed() {
//   // Check if mouse is inside the cheese
//   var d = dist(mouseX, mouseY, 100, 100);
//   if (d < 100) {
//     // Pick new random color values
//     serv1= false;
//     serv2= false;
//     cheese= y - 1;
//
//
//     if (serv1= false){
//       serv1= "serv2.svg"
//     }
//
//     if (serv2= false){
//       serv2= "serv1.svg"
//     }
//   }
// }

// When the user releases the mouse
function mouseReleased() {
  cheese= height +1;
  serv1= true;
  serv2= true;
}
