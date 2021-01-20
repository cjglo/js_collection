
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
