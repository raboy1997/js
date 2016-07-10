/*var arr = [4,5,6,7,8];
var sum = 0;
var i = 0;
for (i; i < arr.length; i++){
  sum += arr[i];
}

console.log(sum);
*/
/*var arr = [4,5,6,7,8];
var sum = 0;
var i = 0;
while (i <arr.length ){
	sum += arr[i];
	i++;
}

console.log(sum);
*/
//var i = 0;
/*do {
	console.log(i);
	i++;
}while(i<10);
*/

// for (i; i < 10; i++) {
 	/*for(var j = 0; j < 3; j++){
		if (j == 2){
			break ;
		}
		
	}*/

//	console.log(i);
//}
var arr = [4,5,6,7,8];
var sum = 0;
var i = 0;
for (i; i < arr.length; i++){
	if (arr[i] == 6){
		continue;
	}
  sum += arr[i];
}

console.log(sum);