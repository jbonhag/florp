describe("Dot", function() {
  var dot;
  
  beforeEach(function() {
    dot = new Dot();
  });

  afterEach(function() {
    dot = undefined;
  });

  it("is a thing", function() {
    expect(dot).not.toBe(undefined);
  });

  it("has a diameteter of 100", function() {
    expect(dot.diameter).toEqual(100);
  });
  
  describe("#drop", function() {
    it("changes its y position by one times its diameter", function() {
      dot.diameter = 14;
      dot.y = 10;
      dot.drop();
      expect(dot.y).toEqual(24);
    });
  });
  
  describe("#move", function() {
    it("moves the dot to a new position", function() {
      dot.move(12, 14);
      expect(dot.x).toEqual(12);
      expect(dot.y).toEqual(14);
    });
  });
});

