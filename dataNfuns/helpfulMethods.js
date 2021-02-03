
// Note: No primitives have methods
// when you cann method it wraps primitive in object then calls, then unwraps


// *** some helpful methods:

let x = 5;
let y = "10";
// x + y will always do string concat since one is string
x + Number.parseInt(y); // this will get desired result.
// will take first number found so
let example = Number.parseInt("I love 10, what a good number."); // will truncate and take 10 


// ***
// converting from binary, octal, and hexadecimal
let input = 11;
input; // decimal
Number.parseInt(input, 2); // reads value as binary (prints 3) aka converts to decimal
Number.parseInt(input, 8); // reads value as octal (prints 9) aka converts to decimal
// convert to binary:
input.toString(2); // converts to binary (as a String)


// *** 
// like mentioned, methods from primitives cause wrap and then unrap
// to "always" work with object, you can use 'new'
let n = new Number(23); // n is now Number object
n.valueOf(); // gets us the primitive


// ***
let content = "    lots of space at both ends\t\n\t";
content.trim(); // gets rid of leading and tailing white space

// ***
// String note: can use the templization (including `${}`) or can use " + varName + "
// Another String note: can also help break up text with backslash
console.log("super super long thing I am writing, I want to have it on one \
	line when printed, but don't want a long \
	line, this helps with that.  This is all 1 line\
	but is neater in the code.");


// ***
// js version of switch:
let name = "John";
switch(name) {
	case "Caleb":
		console.log('is caleb');
		break;
	case "John":
		console.log('is John');
		break;
	default:
		console.log("everyone else");
		break; // don't really need, just good practice
}



// *** ternary operator (same as c++ i believe)
let points = name === "Caleb" ? 10 : 0; // value given is 10 or 0 


// ***
// syntax to create a break
var br = document.createElement('br');
// then append it to a <p>


