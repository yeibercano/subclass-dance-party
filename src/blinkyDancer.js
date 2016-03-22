var BlinkyDancer = function(top, left, timeBetweenSteps){
  // var args = arguments;
  Dancer.call(this, top, left, timeBetweenSteps);
  // BlinkyDancer.prototype.constructor = BlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // console.log('BlinkyDancer this: ', this)

};

// BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)
  this.$node.toggle();
};