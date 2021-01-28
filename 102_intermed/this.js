// getting into 'this' keyword


{

	let me = {
		x: 23,
		name: "Sam",
		outputMe: outputMe,
		outputMeStrict: outputMeStrict,
	}

	function outputMe(){
		console.log(this);
	}

	outputMe(); // "this" will be Window Object
	me.outputMe(); // "this" will be me Object

	function outputMeStrict(){
		'use strict';
		console.log(this);
	}

	outputMeStrict(); // undefined

	me.outputMeStrict() // will use the "self" this


}


{
	// constructor with "this"
	function Person(){
		// this will always be the new object when created
		console.log(this);
	}


	let person = new Person(); // empty object will refer to this new one
	let person2 = new Person(); // new "this"

}


{
	// call and apply and bind

	function doStuff()(input){
		conosle.log(this);
	}



	doStuff.call("First arg is value of this", "this is input arg");
	// so this would call doStuff "from" the long string saying 'first arg is...'

	// apply is the same, but takes an array as second arg, not too importnat but worht mention



	let newFunc = doStuff.bind("hello", args);

	newFunc(); // this is stuck as "hello" object

}



{
	// arrow revisted

	let cubeArrow = x => x*x*x; // can't exclude () if only 1 parameter

	let sum = (x, y) => { return x + y; } // return no logner implied if {} there

	// "this" w/ arrows
	


}