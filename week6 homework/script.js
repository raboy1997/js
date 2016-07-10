var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');

// var parentHeightBorder = ball.parentNode.clientHeight - ball.clientHeight;
 //var parentWigthBorder = ball2.parentNode.ClientWigth - ball2.ClientWigth;

document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('click', handler );
  function handler(event) {
  	var targetEvent = event.target;
  	console.log(targetEvent);
	if (targetEvent.classList.contains("class")) {
    	targetEvent.style.left = "400px"
    } 
  };


});



 var ball2 = document.getElementById('ball2');
 //var parentHeightBorder = ball.parentNode.clientHeight - ball.clientHeight;
var parentWigthBorder = ball2.parentNode.clientWidth - ball2.clientWidth;

function ball2Left(event) {
  	var targetEvent = event.target;
    if (targetEvent.id == "ball2") {
      	targetEvent.style.left = parentWigthBorder + "px";
        }
        
 };