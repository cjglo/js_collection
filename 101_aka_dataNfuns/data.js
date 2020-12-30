
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


