var ExplodeDancer = function() {
  Dancer.apply(this,arguments);
};

ExplodeDancer.prototype = Object.create(Dancer.prototype);
ExplodeDancer.prototype.constructor = ExplodeDancer;

ExplodeDancer.prototype.step = function () {
  Dancer.prototype.step.apply(this, arguments);

  // current
  //jQuery:
  this.$node.animate({
    'height':'10px'},
    500, 'swing');
  this.$node.animate({
    'width':'10px'},
    500, 'swing');
    this.$node.animate({
    'height':'0px'},
    500, 'swing');
  this.$node.animate({
    'width':'0px'},
    500, 'swing');
};