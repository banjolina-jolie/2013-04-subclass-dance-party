var JigglyDancer = function() {
  Dancer.apply(this, arguments);
};

JigglyDancer.prototype = Object.create(Dancer.prototype);

JigglyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this,arguments);

  //do stuff with jquery:

};