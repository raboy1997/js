/*var content = document.getElementById("content");
var newElem = document.createElement("div");
newElem.id = "test-id"
newElem.innerHTML = 'Новый элемент списка';
document.body.insertBefore(newElem, content);

var divs = content.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
	if (i % 2 === 0) {
		divs[i].style.background = "green";
	} else {
		divs[i].style.background = "black";
	}
}
var top = document.getElementById('content');
var first_top = top.getElementsByTagName('div')[0];
var p = document.querySelectorAll('p')[0];
top.insertBefore(p, first_top);

var secondParagraph = document.querySelector("#content > p ~ p");

function setStyle(object, styles, value) {
	object.previousElementSibling.style[styles] = value;
	object.nextElementSibling.style[styles] = value;
};

setStyle(secondParagraph, "color", "red");
setStyle(secondParagraph, "font-size", "25px");
setStyle(secondParagraph, "font-weight", "bold");
setStyle(secondParagraph, "font-style", "italic");

var elem = document.createElement('p');

elem.innerHTML = "Separator";
console.dir(elem);
document.getElementById('content').appendChild(elem);
*/

/*var squares = document.getElementById("square");



function handler() {
	var newElem = document.createElement("div");
	newElem.className = "ball";
	document.body.insertBefore(newElem.cloneNode(true), squares);
 	//console.log(newElem); 					    
 	document.body.appendChild(newElem.cloneNode(true), squares);
  };

squares.addEventListener('click', handler );
*/
/*
document.addEventListener('DOMContentLoaded', function() {
	var ball = document.getElementById('ball')
document.addEventListener('click', handler );
  function handler(event) {
  	console.dir(event.target);
  	var targetEvent = event.target;
	if (targetEvent.nodeName == "DIV") {
    	targetEvent.style.borderRadius = "0px";

    } /*else {
    	var ballClone = document.getElementById('ball').cloneNode(true);
    	ballClone.innerHTML = '';
    	document.body.appendChild(ballClone);
    }
    ball.addEventListener('transitioned', function(event) {
    	ball.style.borderRadius = "50%";
    });

  };


});
*/
document.addEventListener('DOMContentLoaded', function() {
	
document.addEventListener('click', handler );
  function handler(event) {
  	
  	var targetEvent = event.target;
    console.log(targetEvent);
	if (targetEven == "#ball") {
      targetEvent.style.left = "400px";
    } 
  };


});


var squares = document.getElementById("square");



function handler() {
  var newElem = document.createElement("div");
  newElem.className = "ball";
  document.body.insertBefore(newElem, squares);
 document.body.appendChild(newElem.cloneNode(true), squares);
  };

squares.addEventListener('click', handler );




var ball = document.getElementById('ball');

function handler(event) {
console.dir(event)
  ball.classList.toggle('blue');
 };

ball.addEventListener('click', handler );