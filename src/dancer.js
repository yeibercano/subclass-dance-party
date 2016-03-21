// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  // Object.apply(this, arguments)
  MakeDancer.prototype.constructor = MakeDancer;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  
  this.$node = $('<span class="dancer"></span>');
  // console.log('$node in makedance: ', $node)
  this.top = top;
  this.left = left;

  console.log('this makeDancer:', this);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote  dancer.setPosition(top, left);

};

MakeDancer.prototype = Object.create(Object.prototype);

MakeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
