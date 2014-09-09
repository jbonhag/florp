var Dot = function() {
  this.diameter = 100;
  this.y = 0;
  this.color = 0;
};

Dot.prototype.drop = function() {
  this.y += this.diameter / 100;
};

Dot.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
};

Dot.prototype.draw = function() {
  stroke(this.color);
  fill(this.color);
  ellipse(this.x, this.y, this.diameter, this.diameter);
};

Dot.prototype.florp = function() {
  this.x += random(3) - 1;
  this.y += random(3) - 1;
  this.color++;
};
