// contructor for methods
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }


  // new instance
let terrier = new Dog('shift', 'yellow');

console.log(terrier instanceof Dog);


// Understand Own Properties
function Bird(name) {
    this.name = name;
}


Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

let canary = new Bird("Tweety");
let ownProps = [];
let prototypeProps = [];

for (let prop in canary) {
    if (canary.hasOwnProperty(prop)){
      ownProps.push(prop);
    }else {
        prototypeProps.push(prop);
    }
  }

console.log(ownProps);
console.log(prototypeProps);
console.log(Bird.prototype.isPrototypeOf(canary));
console.log(Object.prototype.isPrototypeOf(Bird.prototype));

// Use Prototype Properties to Reduce Duplicate Code
// inheritance using Object.create instead of new
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
// Reset an Inherited Constructor Property
Dog.prototype.constructor = Dog;
Dog.prototype.swim = function() {
    console.log("I'm Swimming!");
  };

let beagle = new Dog();
// override the animal eat method
Dog.prototype.eat = function() {
    return 'wow wow!';
  };

console.log(beagle.eat());
beagle.swim();

// Use a Mixin to Add Common Behavior Between Unrelated Object
let bird = {
    name: "Donald",
    numLegs: 2
  };

  let boat = {
    name: "Warrior",
    type: "race-boat"
  };

  // Only change code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log('Im gliding')
    }
  }

  glideMixin(bird);
  glideMixin(boat);
  bird.glide();
  boat.glide();


  //Use Closure to Protect Properties Within an Object from Being Modified Externally
  function Bird() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    }

  }

let ducky = new Bird();
ducky.getWeight();


// Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
  })();

// Use an IIFE to Create a Module
let ducks = {
    name: "Donald",
    numLegs: 2
}

let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
           return true;
    };
  },
      singMixin: function(obj) {
        obj.sing = function () {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();


funModule.singMixin(ducks);
ducks.sing;
