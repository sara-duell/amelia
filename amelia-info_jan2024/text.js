var txt;
function preload() {
    txt = loadStrings("writings.txt");
  }

  function setup () {
noCanvas();
    // console.log(txt);
createP(join (txt, "<br/>")).parent('writing');
  }
