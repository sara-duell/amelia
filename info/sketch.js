let img01, img02;
let topLayer;
var txt;


function preload() {
  if (displayWidth < 880) {
      img01 = loadImage("images/fog1nightm.jpg");
      img02 = loadImage("images/fog2nightm.jpg");
      txt = loadStrings ("text/writings.txt");
  }
  else {
      img01 = loadImage("images/fog1.jpg");
      img02 = loadImage("images/fog2.jpg");
      txt = loadStrings ("text/writings.txt");
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bottomLayer = createGraphics(windowWidth, windowHeight);
  bottomLayer.image(img02, 0, 0, windowWidth, windowHeight, 0, 0, 2500, 1667, COVER);

  topLayer = createGraphics(windowWidth, windowHeight);
  topLayer.image(img01, 0, 0, windowWidth, windowHeight, 0, 0, 2500, 1667, COVER);
  topLayer.strokeWeight(100);
  topLayer.blendMode(REMOVE)

  console.log(txt);
  createP(join (txt, "")).parent('intro');

  originalWidth = windowWidth;
  originalHeight = windowHeight;
}

function draw() {
  image(bottomLayer, 0, 0, windowWidth, windowHeight, 0, 0, 2500, 1667, COVER);
  image(topLayer, 0, 0, windowWidth, windowHeight, 0, 0, 2500, 1667, COVER);
  if(mouseIsPressed) {
      topLayer.line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  bottomLayer = createGraphics(windowWidth, windowHeight);
  bottomLayer.image(img02, 0, 0, windowWidth, windowHeight, 0, 0, 2500, 1667, COVER);

  topLayer = createGraphics(windowWidth, windowHeight);
  topLayer.image(img01, 0, 0, windowWidth, windowHeight, 0, 0, 2500, 1667, COVER);
  topLayer.strokeWeight(100);
  topLayer.blendMode(REMOVE)
}


// function createMetaTag() {
// 	let meta = createElement('meta');
// 	meta.attribute('name', 'viewport');
// 	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

// 	let head = select('head');
// 	meta.parent(head);
// }



