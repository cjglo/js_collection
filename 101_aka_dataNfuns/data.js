
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


person['first'] // accesses Michael
person.first // also does the same

// BIG NOTE: if used number, accessable with [] as number or string of that number
// this is cause key is converted to string and [ ] does the same
// can put expression inside [ ] if you wanted to, varaibles count as expressions



// ** For..of with arrays **
console.log('\n');
let animals = ['dog', 'cat', 'squirrel', 'turtle'];

for(let each of animals)
{
	console.log(each);
}
// Note: Arays and strings are both iterables



// ** iterating over objs (since not iterables) ---

// Must use for..in !!!

// note: for..in is very rare, use of, but in is for objects

const testscores = {
	Matt: 79,
	Sam: 80,
	Sarah: 78,
	Ali: 80,
	Amy: 81,
}

for (let person in testscores)
{
	console.log(person); // will print keys! not the values

	console.og(testscores[person]); // prints value
}

// also can use a special std lib function:

Object.values(testscores); // returns array of the values


// ** Object methods **

const myMath = {
	PI: 3.14159265
	square: function (num) { return num*num; }
} // attribute of pi and method of suqare, obviosuly


// shorthand is to just write something like:
// square(num) { // stuff }



// *** destruct object! ***

const user = {
	email: 'example@gmail.com',
	password: 'me1990',
	first: 'Jogn',
};

const {email, password} = user; // creates email and password vars from above values
const {first: userName, password: pass} = user; // creates vars with diff names based on obj's values




