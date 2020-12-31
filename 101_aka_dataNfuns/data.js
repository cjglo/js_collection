
// Arrays

// Arrays can be empty and be expaned and can hold multiple types

let colors = [];

typeof colors; // returns type which is object, not totally related but a note


// BIG NOTE: Can reasign for arrays but NOT strings

let firstName = "john";
firstName[0] = "A";

console.log(firstName) // THIS WILL STILL BE "john"
// not true for arrays



// Can change type or make array longer with reassignment

let favorites = ["red", "blue", "chicken"];

favorites[1] = 70;

// favorites is now red, 70, chicken

favorites[4] = "sleeping";

// favoirites is now red, 70, chicken, empty, sleeping




// Array comamnds:
// push, pop
// shift -> removes from start, (since pop is end)
// unshift -> adds to start (push adds to end like normal)
// many other commands - indexOf -> searching - concat -> merge - and many others

// note: IndexOf returns -1 if not in array



// Slices and Splices

// Portions of arrays

let foods = ['burger', 'carrot', 'candy', 'potato'];

foods.slice() // copy of array
foods.slice(2) // from index of 2 until end
foods.slice(1, 3) // from 1 up to 3 (not including)
foods.slice(-2) // last two elements

foods.splice(0, 1) // starts at 0 and deletes 1 item and returns array of deleted
// deletes and shifts, not empty cell

// can add an elemtn where deleted with next argment of a string
// if adds at the start index not after


// REMEMBER:
// arrays are references, like any language so any comparions with == or ===
// will ALWAYS be false, regardless of no contents / identifical contents / etc
// will be comparing references


// also note: const [] does let you change contents, if cares about [] address






// **** OBJECTS ****** //

const person = {
	first: 'Michael',
	lastname: 'Jageh'
}






