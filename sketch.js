let img01, img02;
let topLayer;
var txt;

function preload() {
    if (displayWidth < 880) {
    img01 = loadImage("images/fog1m.jpg");
    img02 = loadImage("images/fog2m.jpg");
    txt = loadStrings ("text/bio.txt");
    } else {
    img01 = loadImage("images/fog1.jpg");
    img02 = loadImage("images/fog2.jpg");
    txt = loadStrings ("text/bio.txt");
} 

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  topLayer = createGraphics(displayWidth, displayHeight);
  topLayer.image(img01, 0, 0, window.innerWidth, window.innerHeight, 0, 0, 2500, 1667, CONTAIN);
  topLayer.strokeWeight(100);
  topLayer.blendMode(REMOVE)
 
    console.log(txt);
createP(join (txt, "")).parent('intro');
}

function draw() {
  image(img02, 0, 0, window.innerWidth, window.innerHeight, 0, 0, 2500, 1667, CONTAIN);

  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  }

  image(topLayer, 0, 0)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// function createMetaTag() {
// 	let meta = createElement('meta');
// 	meta.attribute('name', 'viewport');
// 	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

// 	let head = select('head');
// 	meta.parent(head);
// }

