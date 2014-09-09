function setup() {
  createCanvas(windowWidth, windowHeight);
}

var dots = [];

function draw() {
  background(255);
  if (mouseIsPressed) {
    var dot = new Dot();
    dot.x = mouseX;
    dot.y = mouseY;
    dots.push(dot);

    while (dots.length > 100) {
      dots.shift();
    }
  }

  dots.map(function(dot) {
    dot.draw();
    dot.florp();
  });
}
