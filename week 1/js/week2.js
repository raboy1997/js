function custom(a,b,c) {
	return a + b + c;
}

//console.log(custom(1,2,3));
//console.log(custom(1,2,6));

var func = function() {
	return 10;
};
//console.log(func());

function example(array) {
	var sum = 0
		arr = array;
	for (var i = 0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

//console.log(example([4,6,7,8,10]))


//====*** МАССИВЫ ***==== 
//var myArray = [4,6];
//var myArray2 = new Array(10);
/*myArray.push(1 ,2, 'test');
console.log(myArray);

var q = myArray.pop();
console.log(q);
myArray.pop();
console.log(myArray);


myArray.shift();
console.log(myArray);
myArray.unshift(25);
console.log(myArray);

var myArray = [4,6,7,8,9];
var w = myArray.splice(0,3, 'test' , 65);
console.log(w)
console.log(myArray);

var myArray = [4,6,7,8,9];

var text = myArray.join('');
console.log(text);
*/

/*var filter = myArray.filter(function (currElem, index, array){
		//console.log(currElem);
		//console.log(index);
		//console.log(array);
		return currElem < 7 ;

});

console.log(filter);
*/



/*var some = myArray.every(function(currElem, index, array){
return currElem > 3 ;
});

console.log(some);
*/


/*var mapArr = myArray.map(function(currElem , index , array) {
	return currElem * 2;
});

console.log(mapArr);
*/
/*var myArray = [4,10,7,8,9, 1 , 11];  // для цифровых 

 /*var sorted = myArray.sort(function(a,b) {
 	return a - b;
 });
 */
 
/*var names = ['maxim' , 'Sergey' , 'Max'] // для  текстовых 
 var sorted = names.sort(function(a,b) {
 	if(a > b){
 		return 1;
 	}
 	if(a < b) {
 		return -1;
 	}

 	return 0;
 });
 //console.log(sorted);


 var arrReverse = myArray.reverse();
console.log(arrReverse);
*/

/*var names = ['Jon', 'Mark', 'alex', 'Aleksey', 'ben', 'Mike', 'Dima', 'masha'];
   
  
var lower = names.map(function(currElem , index , array) {
	return currElem.toLowerCase();
}).sort(function(a,b) {
 	if(a > b){
 		return 1;
 	}
 	if(a < b) {
 		return -1;
 	}

 	return 0;
 });
 console.log(lower);
*/
//var myArray = [1, 2, 5, 4, 9, 6]
/*var sum = myArray.reduce(function(initValue, nextValue, index, array) {
	
	console.log(initValue,nextValue);
	return initValue + nextValue;
});
*/

//console.log(sum);

/*
var sum = myArray.reduce(function(initValue, nextValue, index, array) {
	
	console.log(initValue);
	initValue[index] = nextValue;
	//initValue.push(nextValue);
	return initValue;
}, {});
*/



var myArray = [1, 2, 3, 4, 5]
var sum = myArray.reduce(function(initValue, nextValue, index, array) {
	var item = initValue.length ? nextValue + initValue[index - 1] : nextValue;
	initValue.push(item);
	return initValue;
		
} ,[]);

console.log(sum);





