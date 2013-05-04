var JigglyDancer = function() {
  Dancer.apply(this, arguments);
};

JigglyDancer.prototype = Object.create(Dancer.prototype);
JigglyDancer.prototype.constructor = JigglyDancer;

JigglyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this,arguments);

  this.$node.animate({
    'margin-left':'10px'},
    100, 'linear');
  this.$node.animate({
    'margin-left':'0px'},
    100, 'linear');
};