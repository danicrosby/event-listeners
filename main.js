console.log("greetings, beautiful from main.js")


const firstObj = {};

const user = {
  username: 'biz.makie',
  password: 'abcd1234', 
  lovesJS: true,
  favoriteNumber: 42,
}

//DOT NOTATION 

// GET VALUES OF THE OBJECT (define the object then the key value)
console.log(user.lovesJS); //true
console.log(user.username); //biz.makie
console.log(user.favoriteNumber); //42


// BRACKET NOTATION 
// GET VALUES OF THE OBJECT (define the object, inside the brackets use a string)
console.log(user['usernname']);
console.log(user['favoriteNumber']);


// ASSIGNING VALUES

// DOT NOTATION
// HOW TO ACCESS KEY VALUE PAIR
const newUser = {
  isNew: true,
}

newUser.username = 'fresh.prince';
console.log(newUser);

// BRACKET NOTATIONS 
newUser['password'] = 'abcd1234';
console.log(newUser);


// ACSESSING WITH ANNON FUNCTION
const newObject = {
  username: 'Teresa',
  sayHello:
  function () {  //This is an annonymous function
    console.log('Hi, Everyone!');
  }
}

// newObject.sayHello(); //'Hi, Everyone!'


// METHODS (FUNCTIONS AS VALUES)
const newObject1 = {
  username: 'Teresa',
  sayHello: function () {  //This is an annonymous function
    console.log(`${this.username} says Hello`);
  }
}

// newObject1.saysHello(); //Teresa says hello


// ITERATING OVER OBJECT FOR IN LOOP
// need to define key in object is

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJS: true,
  favNum: 12,
}

for (let key in userTwo) {
  console.log(key);  // returns all keys
  console.log[userTwo[key]]; //returns values
  console.log(userTwo.key); //RETURNS UNDEFINED: values but doesnt work on this type of object
}
console.log("Greetings from main.js");



//EVENT LISTENERS

function saysHiToUser(user) {
  return `Hello ${user}!`;
}

function saysGoodbyeToUser(user) {
  return `Goodbye ${user}!`;
}


//FUNCTIONS THAT TAKES IN A FUNCTION AS AN ARGUMENT
function createGreeting(user, cb) {
  return cb(user);
}

createGreeting('Dani', saysHiToUser);
createGreeting('Dani', saysLaterToUser);


/// needs a function or a callback
/// callback accept 2 arguements one is a function and one is a call back or event
/// function is like a copy machine, reusable
