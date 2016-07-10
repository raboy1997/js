var ball = document.getElementById('ball');
var box = document.getElementById('box');
var ball2 = document.getElementById('ball2');
var box2 = document.getElementById('box2');

document.addEventListener('keypress', moveBall, false);

function moveBall(event) {

	var topPoint = box.clientHeight - ball.offsetHeight + "px";
	var rightPoint = box2.clientWidth - ball2.clientWidth + "px";
	function goToPoint(object, typeStyle, finValue) {
		object.style[typeStyle] === "0px" ? object.style[typeStyle] = finValue : object.style[typeStyle] = "0px";
		object.addEventListener('transitionend', function() {
			object.style[typeStyle] === "0px" ? object.style[typeStyle] = finValue : object.style[typeStyle] = "0px";
		}, false);
	}

	if (event.key === "g" || event.key === "п") {
		goToPoint(ball, "bottom", topPoint);
	} // Press "G"

	if (event.key === "h" || event.key === "р") {
		goToPoint(ball2, "left", rightPoint);
	} // Press "H"

// Speed Control
	var animSpeed = getComputedStyle(ball).transitionDuration.split(", ");
	function animSpeedSet(step) {
		ball2.style.transition = ball.style.transition = "bottom " + (parseFloat(animSpeed[0]) + step) + "s, left " + (parseFloat(animSpeed[1]) + step) + "s";
	}
	if (event.key === "-") {
		animSpeedSet(parseFloat("0.05"));
	} // Press "-"
	if ((event.key === "+" || event.key === "=") && parseFloat(animSpeed[0]) > 0.1 && parseFloat(animSpeed[1]) > 0.1) {
		animSpeedSet(parseFloat("-0.05"));
	} // Press "+"
}
