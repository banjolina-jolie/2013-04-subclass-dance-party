var ImageDancer = function() {
  Dancer.apply(this,arguments);

  this.$node.removeClass('dancer');
  this.$node.addClass('imageDancer');

  $('audio')[0].play();

};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;

ImageDancer.prototype.step = function () {
  Dancer.prototype.step.apply(this, arguments);

  this.$node.animate({rotationProp: 360}, {
    step: function(now,fx) {
      $(this).css('transform', 'rotate('+now+'deg)');
      },
    duration:this.timeBetweenSteps-50}
  );
  this.$node.css('rotationProp', '0');

};