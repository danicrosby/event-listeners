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



//EVENT LISTENERS 
// IS ANYTHING THAT HAPPENS ON THE DOM (MOUSE EVENT ETC)
// event listeners is just a function on the DOM
// when we select an element on the dom you can add an event listener

//CLICK EVENT

//targeting ID of element on DOM
//ADD EVENT: what am I listening for:this example is with Event and a function
//SPECIFIC ITEM FUNCTION/EVENT
// const button4 = document.querySelector('#main-btn');

// button.addEventListener('click', (event) => {
//   console.log(`You clicked ${event.target.id}!`);
// });


// FOR GENERIC/MULTIPLE ITEMS (PRINTER)
// const whatIsTheId = (event) => {
//   console.log(`You clicked ${event.target.id}!`);
// }
// button.addEventListener('click', whatIsTheId)



//TARGET 'OTHER-BUTTON' AND CLICK, RUN whatIsTheId
// const button2 = document.querySelector('#other-button');
// button2.addEventListener('click', whatIsTheId); //accessing the generic function we made ealier


//event listeners pass a function or a call back (e)
// target events within 
//click is an event
//first argument is always a named event
//second is the event itself
//target mean what ever button is click
//looking for a clicked , then giving the id that was clicked

//ADDING LOGIC
const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');
const button2 = document.querySelector('#other-button');



const whatIsTheId = (event) => {
  // console.log(event) 
  console.log(`You clicked ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the OTHER CONTAINER';
  }
}
// button.addEventListener('click', whatIsTheId);
button2.addEventListener('click', whatIsTheId);
