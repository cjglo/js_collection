
// Since js runs with entire file as main, any declared variable is in scope with functions (like it would be with loops)


let x = 0;

function addOne()
{
	x++;
}

// x is now 1

function diffAddOne()
{
	let x = 0;
	x++;
}

// x out here is still 1, overshadowed inside func,  thats pretty normal



// *** let vs var ****

// var only scoped in functions, let is scoped in blocks, like normal langauges




