//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry, ownder) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog ('sadie', 'normal', 'black', false, 'mason');
let moonshine = new Dog ('moonshine', undefined, undefined, true, undefined);
let atticus = new Dog ('atticus', undefined, undefined, undefined, undefined);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
    this.cool = cool;
}

Human.prototype.feed = function(dog){
  this.dog = dog;
  dog.hungry = false;
};

Human.prototype.pet = function(dog){
  this.dog = dog;
  dog.status = 'happy';
};


// Instances of Human
// Needed: mason, julia

let mason = new Human(false);
let julia = new Human(true);
