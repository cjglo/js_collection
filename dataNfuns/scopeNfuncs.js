
// Since js runs with entire file as main, any declared variable is in scope with functions (like it would be with loops)


let x = 0;

function addOne()
{
	x++;
}

// x is now 1

function diffAddOne()
{
	let x = 0;
	x++;
}

// x out here is still 1, overshadowed inside func,  thats pretty normal



// *** let vs var ****

// var only scoped in functions, let is scoped in blocks, like normal langauges




// ** function expressions **

const square = function (num) {
	return num*num;
} // this is a function expression, creates a function and stores it inside square
// this is because functions are objects



// ** Higher Order functions **

// these are functions that work on functions (accept function args or return functiosn)

function callTwice(func) // example
{
	func();
	func();
}

// NOTE: Need to not include parathesis, even for normal funcs!!!

function sayHello()
{
	console.log("Hello!");
}

callTwice(sayHello); // this is correct
// callTwice(sayHello()) THIS IS WRONG

