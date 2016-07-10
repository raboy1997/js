/*Array.prototype.inArray = function(value) {
	for (var i = 0 ; i < this.length ; i++) {
		if(this[i] === value) {
			return true ;
		}
	}
	return false;
};

var someArray = [1,2,3,4,5];

//console.log(someArray.inArray(5));

Array.prototype.inArray2 = function(value) {
	var some = this.some(function(elem) {
			return elem === value;
	});
	return some;
};

//console.log(someArray.inArray2(5));

function funk1(value , callback) {
	var a = value * 5;
	 return callback(a) ?  true : false;
}

var b = funk1(1, function (elem) {
	return elem > 4;
});

//console.log(b);






function filter(value , callback) {
		
		return callback();
}

var  arr = [3,4,6];

var b = filter(arr , function(currElem){
	for (var i = 0 ; i < this.length ; i++) {
		if(this[i] < 4) {
			return true ;
		}
	}
	
	return currElem ;

});

//console.log(b);


function filter(array, callback) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter ( arr, function(elem) {
  return elem > 4;
}));


function func(a , b ) {
	console.log(arguments);
	return a + b + this.num;
}

var obj = {num: 20};
var  arr = [3,4,6];
//var test = func.call(obj,4,7)
var test = func.apply(obj, [3,4,5]);
console.log(test);

var arr = [-5,6,7,8,10];
var arr2 = [-5,6,7,8];


function func(){

	return this.sum(arr2);

}

var obj = {
	sum: function(array){
		var test = array.reduce(function(initValue, nextValue, index, array) {

			return initValue + nextValue;

		});

		return test;  
	}
};
 
var result = func.apply(obj,arr2);
console.log(result);




var obj = {num: 7, mam: 10};
function sum(a,b) {


	return a + b + this.mam;
}

var bound = sum.bind(obj);

console.log(bound(4,4));

var a =10 ;
var b = ++a ;
b =11;


function counter(value) {
	var number = value;

	return function () {
		number++;
		return number;
	}
}

var count = counter(10);
console.log(count(12));
console.log(count(12));
console.log(count(12));

console.log(count());
console.log(count());
*/


function summator(value) {
	return function(sum) {
		value += sum; 
		return value;
	}
}

var count = summator(0);
 console.log(count(12));
console.log(count(12));
console.log(count(12));


