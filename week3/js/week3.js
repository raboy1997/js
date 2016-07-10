//'use strict'
/*var array = [1,2,3,4,5,6];
 newArr = array.reduce(function(init , arr , index ) {
	var sum = init.length ? arr + init[index-1]: arr;
	init.push(sum);
	return init;
}, []);
console.log(newArr);*/

/*var anotherObj = { student: { study: [ 'english', 'math' ] },
  Mary: { study: [ 'Music' ] },
  teacher: { teaches: [ 'Ecology', 'Math', 'Physics' ] } };

  for (var pop in anotherObj.teacher) { /// for (in)=>переберает все свойства в обьекте 
  	console.log(pop)
  }*/

 /*var obj = {checkName:2 , me: "Mark"};
  //console.dir(obj);

  Object.defineProperty(obj, "checkName", {
  	//value: "text",
  	//writable: false,//нельзя записать
  	configurable: true ,//нельзя удалить
  	enumerable: true,// нельза перечислить for (in)
  	/*set (value) {
		if(value != this.me){
  			//throw 'nothing';
  		}
  		else {
  			this.me = value;
  		}
  	},*/
    /*
  	get () {
  		return 10; 
  	},
*/
 

  //console.dir(obj);

/*  Object.defineProperty(obj, "checkName", {
  	//value: "text",
  	//writable: false,
  	configurable: true ,
  	enumerable: true,
  	/*set (value) {
		if(value != this.me){
  			//throw 'nothing';
  		}
  		else {
  			this.me = value;
  		}
  	},
  	get () {
  		return 10; 
  	},

  });


obj.checkName = "Mike";
console.log(obj.checkName);
*/
/*var obj = {checkName:2 , me: "Mark"};
Object.defineProperties(obj, {
  	foo: {
    value: "text",
  	writable: false,
  	configurable: true ,
  	enumerable: true,
  	},
    bar : {
    value: 10,
    }

  });
  */

//console.log(obj);

/*var people= {name: "Mike" , age: 18};
var obj = Object.create(people, {
	foo: {value: 123},
  bar: {value: 111}
});
console.dir(obj)
console.log(obj)*/
/*console.dir(obj);


var SomeClass = function() {};

var newObj = new SomeClass();
console.dir(newObj);
*/
/*
var father = {age:18 , name: "Max"};
var obj = Object.create(father, {
	foo:{ value: "text",
  			writable: false,
        configurable: false
  },
  age:{ value: "text1",
  			writeble: false,
        configurable: false
  },
  max:{	value: "text3",
  			enumerable: false
  		
  }
});

console.dir(obj);

*/

/*
function Factory() {
	var temp = {};
  temp.sum = function(a,b) {
  	return a + b;
  }
  return temp;
}

var test = Factory();
console.dir(test.sum(4,3));
*/

/*var MyClass = function() {};
MyClass.prototype.name = "Mike";
MyClass.prototype.age = 18;
MyClass.prototype.info = function () {
    return this.name + " " + this.age;
};
var obj = new MyClass();
console.log(obj);

*/

//obj.checkName = "Mike";
//console.log(obj.checkName);

var MyClass = function (name) {
  var test = 10;
  this.name = name;
};
MyClass.prototype.name = "Mike";
MyClass.prototype.age = 18;
MyClass.prototype.info = function () {
  return this.name + " " + this.age;
};
var obj = new MyClass();



//Array.prototype create new metod inArray который вернет тру или фалсе на есть в масиве елемент или нет 