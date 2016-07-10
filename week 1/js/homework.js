var text = "student study english\nstudent study math\nstudent study Music\n" +
"teacher teaches Ecology\nteacher teaches Math\nteacher teaches Physics";


/* output should be like:
{
	student: {
		study:["english", "math", "Music"]
	}
	teacher: {
		teaches:["Ecology", "Math", "Physics"]
	}
}
*/

	
var text = "student study english\nstudent study math\nstudent study Music\n" +
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