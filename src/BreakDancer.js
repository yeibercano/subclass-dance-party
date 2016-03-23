var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/breakDancer.gif"></img>');
  console.log('BreakDancer: ', this)
};

BreakDancer.prototype.constructor = BreakDancer;


BreakDancer.prototype = Object.create(Dancer.prototype);

BreakDancer.prototype.breakin = function() {
  
};