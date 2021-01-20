document.getElementById("button").onclick = function() {
	let num = Math.floor( (Math.random() * 6) + 1);
	document.getElementById("display").innerHTML = num;
}