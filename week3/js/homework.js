/*var text = "student study english\nstudent study math\nstudent study Music\n" +
"teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics";

function abc(text) {
	text = text.split('\n');
		var initial = {
			student: {
				study: []
			},
			teacher: {
				teaches: []
			}
};
return text.reduce(function (init, arr) {
	var prop1 = arr.split(' ')[0];
	//console.log(prop1);
	var prop2 = arr.split(' ')[1];
	//console.log(prop2);
	init[prop1][prop2].push(arr.split(' ')[2]);
	//console.log(init[prop1][prop2]);
	return init;

},initial);

}
console.log(abc(text));
*/

var members = "student study english\nstudent study math\nMary study Music\n" +
    "teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics",
	school = members.trim().split("\n").map(function(item) {
		return item.split(" ");
	}).reduce(function(init, curr, index, array) {
		// console.log(curr);
		var does = init[curr[0]] || {};
		// console.log(does);
		does[curr[1]] = does[curr[1]] || [];
		does[curr[1]].push(curr[2]);
		init[curr[0]] = does;
		// console.log(init[curr[0]]);
		return init;
	}, {});

console.log(school)


// фабричная функция калькулятор + - / * корень возведение в степень 
//Array.prototype create new metod inArray который вернет тру или фалсе на есть в масиве елемент или нет 