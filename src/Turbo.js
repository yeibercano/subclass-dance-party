var Turbo = function(top, left, timeBetweenSteps) {
  BreakDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/turbohomie.gif"></img>');
};

Turbo.prototype.constructor = Turbo;

Turbo.prototype = Object.create(BreakDancer.prototype);

Turbo.prototype.robot = function() {
  
};