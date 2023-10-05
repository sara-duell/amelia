let img01, img02;
let topLayer;

function preload() {
    img01 = loadImage("sorrel1.jpg");
    img02 = loadImage("sorrel2.jpg");
}

function setup() {
  createCanvas(2400, 1600);
  topLayer = createGraphics(2400, 1600)
  
  topLayer.image(img01, 0, 0, 2400, 1600)
  
  topLayer.strokeWeight(100);
  topLayer.blendMode(REMOVE)
}

function draw() {
  image(img02, 0, 0, 2400, 1600);

  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  image(topLayer, 0, 0)
}

