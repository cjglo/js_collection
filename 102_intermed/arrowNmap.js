// newer syntax for functions

const squareAndAdd = (x, y) => { // very helpful for when functions passed as args
	return (x*x) + (y*y);
}

// can shrink them even mroe with implicit returns
const addThis = (x, y) => ( // para makes it return the one liner
	x + y
); // include semicolon
// or
const addAgain = (x,y) => x + y;



// Map

const movies = ['Alien', 'Scream', 'Waterboy', 'Ironman'];

const movieCaps = movies.map( (t) => { return t.toUpperCase()} ) // with arrow
// returns array of those return values


// setInterval() and setTimepout() are sorta mutlithreading made easy,
// worth noting, although not patricularly relevant unless specific situation


// *** Arrow functions and 'this' ***
console.log("");
const person = {
	first: 'Viggo',
	last: 'Mortenson',
	fullName: function()
	{
		console.log(`${this.first} is his name!`); // says Viggo
	}
	nameAgain: () => {
		console.log(`${this.first} is his name!`); // says undefined
	}
}

person.fullName();

// "this" refers to the object in normal functions, but not for arrow functions
// arrow 'this' refers to scope created in (aka Window in this case)

// think of arrow as caturing what this currently refers to, that way you can pass a function with 'this',
// to another object and it would still refer to the other function

// expanded on later... 
