// references and ===



// typical stuff:

[1,2] == [1,2]; // false

let nums = [1,2];

let numscopy = nums;

nums === numscopy; // true



// accessing references:
// same way as typical
nums.pop()
numscopy.pop()  // each removes one regardless that one is &

// so above called same method on same array twice





// **** This *****

// like C++ for inside methods 
// BUT DOES CHANGE DEPENDING ON CALL!

const cat = {
	name: 'Blue',
	color: 'grey',
	meow() {
		console.log(`${this.name} says hi!`);
	}
}


const meow2 = cat.meow;

meow2(); // this will refer to name of meow2, which has no name!

// you can print ~this~
// in meow will print cat, but in meow2 will print Window object

// every method defined is added to window object, which exists one for each
// window opened

// this is default value set to window object!



