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

