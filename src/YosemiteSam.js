var YosemiteSam = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/YosemiteSam.gif"></img>');
};

YosemiteSam.prototype.constructor = YosemiteSam;

YosemiteSam.prototype = Object.create(Dancer.prototype);

YosemiteSam.prototype.hatDance = function() {
  
};