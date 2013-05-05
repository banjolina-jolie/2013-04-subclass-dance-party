describe("jigglyDancer", function() {
  var jigglyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    jigglyDancer = new JigglyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(jigglyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node jiggle", function() {
    spyOn(jigglyDancer.$node, 'animate');
    jigglyDancer.step();
    expect(jigglyDancer.$node.animate).toHaveBeenCalled();
  });

  describe("dance", function(){

    it("should call step periodically", function(){
      spyOn(jigglyDancer, "step").andCallThrough();
      // for crazy reasons, we need to let some time pass
      // specifically, the spied-upon step function will not be called the first time around
      jasmine.Clock.tick(timeBetweenSteps);

      expect(jigglyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(jigglyDancer.step.callCount).toBe(2);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(jigglyDancer.step.callCount).toBe(3);
    });

  });
});
