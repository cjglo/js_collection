// ** DOM ***

// can access dom with document
// this can let you grab elements directly from it


let list = document.childNodes[1].childNodes[1]; // depends on html, but can check web console and find ordered lists 
												 // or other elemnts by following the tree
console.log(list.nextSibling); // or previousSibling, to get sibling nodes

// searching through web console when output document can show the numerous things can access



// ** Adding comments dynamically

let button = document.getElementById("clickme");

button.onclick = function() {
 	let node = document.createElement('li');
 	node.appendChild(document.createTextNode("new"));

 	let list = document.getElementById("items");

 	list.appendChild(node);

}

