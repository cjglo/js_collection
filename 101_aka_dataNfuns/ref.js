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




