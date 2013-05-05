var ExplodeDancer = function() {
  Dancer.apply(this,arguments);
};

ExplodeDancer.prototype = Object.create(Dancer.prototype);
ExplodeDancer.prototype.constructor = ExplodeDancer;

ExplodeDancer.prototype.step = function () {
  Dancer.prototype.step.apply(this, arguments);

  var duration = this.timeBetweenSteps/4.0;
  this.$node.animate({
    'height':'10px'},
    duration, 'swing');
  this.$node.animate({
    'width':'10px'},
    duration, 'swing');
    this.$node.animate({
    'height':'0px'},
    duration, 'swing');
  this.$node.animate({
    'width':'0px'},
    duration, 'swing');
};

ExplodeDancer.prototype.lineUp = function() {
  Dancer.prototype.lineUp.call(this);
  this.step = function() {
    this.step();
    
  }
};