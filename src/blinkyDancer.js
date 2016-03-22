var BlinkyDancer = function(top, left, timeBetweenSteps){
  // var args = arguments;
  Dancer.call(this, top, left, timeBetweenSteps);

  console.log('BlinkyDancer this: ', this)
  this.oldStep = this.step;
};

// BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.BlinkyDancer.step();
  this.$node.toggle();
  // this.call
};