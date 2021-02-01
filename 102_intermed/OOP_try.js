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


