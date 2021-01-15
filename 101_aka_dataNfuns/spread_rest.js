// expand array into many elements
nums = [13, 4, 5, 7, 1, 89, 27, -13];

// Math.max(nums); // Nan

Math.max(...nums); // passes them all in as a list
// other iterables exist as well (like strings) and can be spread

// also can combine
othernums = [22, 10, 0];
const allNums = [...nums, ...othernums]; // combined array

// spread with objects
const dog = {
	name: 'Dakota',
	age: 10,
};

const blackDog = { ...dog, color: 'black'}; // new object with all of dog plus new field

// object is copied first, so later paramters overwrite
const newDog = { ...dog, name: 'Lucky'};



// ** Rest


// inside each function is an array like object called "arguements", which refers to the arguementss
// acts like an array, but doesn't have methods that array has (other than length)

// so methods like reduce() it won't run.  But Rest can make it work
// it builds an actual array

function sum(...nums) // will build as actual array
{
 console.log("do something");
}
// called Rest as it adds the "rest" of the values into an array, so can have previous ones


