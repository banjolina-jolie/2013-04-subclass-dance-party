describe("imageDancer", function() {
  var imageDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    imageDancer = new ImageDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(imageDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node rotate", function() {
    spyOn(imageDancer.$node, 'animate');
    spyOn(imageDancer.$node, 'css');
    imageDancer.step();
    expect(imageDancer.$node.animate).toHaveBeenCalled();
    expect(imageDancer.$node.css).toHaveBeenCalled();
  });

  it('should trigger a sound when instantiated', function() {
    var $audio = $('<audio src="http://www.kessels.com/catsounds/cat5.wav"></audio>');
    $audio.appendTo($('body'));
    spyOn($audio[0],'play');
    imageDancer = new ImageDancer(10,20,timeBetweenSteps);
    expect($audio[0].play).toHaveBeenCalled();

  });

  describe("dance", function(){

    it("should call step periodically", function(){
      spyOn(imageDancer, "step").andCallThrough();
      // for crazy reasons, we need to let some time pass
      // specifically, the spied-upon step function will not be called the first time around
      jasmine.Clock.tick(timeBetweenSteps);

      expect(imageDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(imageDancer.step.callCount).toBe(2);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(imageDancer.step.callCount).toBe(3);
    });

  });
});
