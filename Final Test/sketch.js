var king, cake, cake1;



function preload() {
  king = loadImage("img/king.svg");
  kingopen = loadImage("img/king1.svg");
  cake = loadImage("img/cake.svg");
  cake1 = loadImage("img/cake1.svg");
  // cake[1] = loadImage("cake.png");
  // cake[2] = loadImage("cake1.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  }

function draw() {
  background('#FFDC6B')//light yellow
  image(cake, 200, 200);
  image(king, mouseX-50, mouseY-50);


  if (mouseIsPressed) {

    var d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
		if (this.src == 'cake') {
        this.src = 'cake1';
    } else if (this.src == 'cake1') {
        this.src = 'cake';
    } else {
        alert('error');
    	}
		}
		//for (var i=0; i<4; i
			///cake (200,200 nums[i], nums[i]);
		//cake = round(0, cake.length);
    //image(cake1, 500, 500, 200, 200);
    image(kingopen, mouseX-50, mouseY-50);
	}
}
