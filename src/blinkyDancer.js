var BlinkyDancer = function(top, left, timeBetweenSteps){
  var args = arguments;
  Dancer.apply(this,args);
  BlinkyDancer.prototype.constructor = BlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  console.log('BlinkyDancer this: ', this)

};

BlinkyDancer.prototype = new Dancer();

BlinkyDancer.prototype.step = function() {
  this.$node.toggle();
};