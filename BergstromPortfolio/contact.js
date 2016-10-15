document.getElementById("submit").addEventListener("click", myFunction);

function myFunction(event) {
	event.preventDefault();
	var x = document.getElementById("exclamation").value;

	x = superExcited(x);

	var x3 = document.getElementById("exclamation2").value;

	x3 = allcaps(x3);

	var x2 = document.getElementById("exclamation3").value;

	x2 = addstuff(x2);

	var x4 = document.getElementById("exclamation4").value;

	x4 = addthis(x4);


	document.getElementById("texttogo")
	.innerHTML = x + "<br>" + x2 + "<br>" + x3 + "<br>" + x4; 
}

function superExcited(string) {
	return string + '!!!!';
}

function addstuff(string) {
	return "My name is " + string;
}

function allcaps(string) {
	return string.toUpperCase();
}

function addthis(string) {
	return "Call Me at " + string;
}