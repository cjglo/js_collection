{
	// to use try, you need a catch block
	// can't just use finally, (finally works like java)

	// finally will always excute even if error is uncaught!! helps make sure things close safely

	try{
		throw { error: "My error", }
	} catch(e)
	{
		console.log(e);
	}
	finally{
		console.log("wrap");
	}


}

// The rest of this is OOP, I just didn't have a place to put the above

// already did a lot of this, but adding methods is not done how you might expect

function User(name) {
	this.name = name;
}

let me = new User("Chris");

me.membership = "gold"; // new field added

// can use factory function, which looks a lot like Rust

function newUser(name) {

	let person = {
		name: name
	}

	return person;
}

let you = newUser("Guest");




// * inheritance  in Javascript

// quick intro
function Cat(name) {
	this.name = name;
}

Cat.prototype.greet = function() {  // now prototype is sorta static method and all will have it
	console.log("hello " + this.name);
}

// js will search for method up prototype chain and return null if finds nothing (just a quick note)


// prototype is passed from one to the next
let user = {
	active: true,
};

let teacher = {
	teaching: ["math", "science"],
};

Object.setPrototypeOf(teacher, user); // protoype of teacher is now user

console.log(teacher); // will show __proto__ and have active: true

// now the chain goes null -> Object -> user -> teacher

// * Overriding in JS: Lower objects take priotiry (searched for name first) so it is as easy as having same
// named method below on list

let student = {
	active: false
};

Object.setPrototypeOf(student, user);
// now user.active is not found before student.active (it follows up the chain written above)



// unralted note: Can check if some object has a certain property

console.log("active in user?", "active" in user);
console.log("another way: ", user.active !== undefined);
// NOTE: Will search prototypes! use .hasOwnProperty("active") to check if property is local to object


// can get list of propoerries with in:
for(let prop in student) {
	console.log(prop); // will print all properties (including proto's, need to add if statement to avoid if want)
}


// Constructors

// note: sort of serves like a class? Its that function that the object is an instance of




