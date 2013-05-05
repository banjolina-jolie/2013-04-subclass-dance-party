var JigglyDancer = function() {
  Dancer.apply(this, arguments);
};

JigglyDancer.prototype = Object.create(Dancer.prototype);
JigglyDancer.prototype.constructor = JigglyDancer;

JigglyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this,arguments);

  var duration = this.timeBetweenSteps/2.0;
  this.$node.animate({
    'margin-left':'10px'},
    duration, 'linear');
  this.$node.animate({
    'margin-left':'0px'},
    duration, 'linear');
};