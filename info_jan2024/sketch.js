let img01, img02;
let topLayer;

function preload() {
    img01 = loadImage('fog1.jpg');
    img02 = loadImage('fog2.jpg');
}

function setup() {
  createMetaTag();
  createCanvas(displayWidth, displayHeight);
  topLayer = createGraphics(displayWidth, displayHeight)
  
  topLayer.image(img01, 0, 0, displayWidth, displayHeight)
  topLayer.strokeWeight(100);
  topLayer.blendMode(REMOVE)
}

function draw() {
  image(img02, 0, 0, displayWidth, displayHeight);

  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  image(topLayer, 0, 0)
}

// function createMetaTag() {
// 	let meta = createElement('meta');
// 	meta.attribute('name', 'viewport');
// 	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

// 	let head = select('head');
// 	meta.parent(head);
// }


