//как можно получить аргумент функции 
function custom() {
	var args = arguments;
	//console.log(q); 
	var sum = 0
		arr = args[0];
	for (var i = 0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

var customArray = [1,2,3,4,5,6];
custom(customArray , 5,6,7);
 console.log(custom([7,8,9]));