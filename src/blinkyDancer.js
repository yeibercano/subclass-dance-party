var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.apply(this.arguments)
  MakeBlinkyDancer.constructor = MakeBlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

};

MakeBlinkyDancer.prototype = Object.create(Dancer.prototype);

MakeBlinkyDancer.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  blinkyDancer.$node.toggle();
};