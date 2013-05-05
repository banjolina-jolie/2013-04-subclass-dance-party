describe("explodeDancer", function() {
  var explodeDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    explodeDancer = new ExplodeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(explodeDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node expand", function() {
    spyOn(explodeDancer.$node, 'animate');
    explodeDancer.step();
    expect(explodeDancer.$node.animate).toHaveBeenCalled();
  });

  describe("dance", function(){

    it("should call step periodically", function(){
      spyOn(explodeDancer, "step").andCallThrough();
      // for crazy reasons, we need to let some time pass
      // specifically, the spied-upon step function will not be called the first time around
      jasmine.Clock.tick(timeBetweenSteps);

      expect(explodeDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(explodeDancer.step.callCount).toBe(2);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(explodeDancer.step.callCount).toBe(3);
    });

  });
});
