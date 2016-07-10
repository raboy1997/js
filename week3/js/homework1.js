function Factory() {
	var temp = {};
  temp.sum = function(a,b) {
  	return a + b;
  }
  temp.min = function(a,b) {
  	return a - b;
  }
  temp.sub = function(a,b) {
  	return a * b;
  }
  temp.div = function(a,b) {
  	return a / b;
  }
  temp.pow = function(n,a) {
   var b = a;
    for (var i = 1; i < n; i++) {
  		 b *= a;
  } 
     return b;

}
  temp.sqr = function(n){
  	
  for(var i = 2,current=2,iterate=0;i<n;current=2+iterate,i++) {
    current = current*i;
    if(current==n) {
      return i;
    }
      iterate++;
    }
  }




  return temp;
}

var test = Factory();
console.log(test.sum(4,3));
console.log(test.min(4,3));
console.log(test.sub(4,3));
console.log(test.div(4,3));
console.log(test.pow(4,2));
console.log(test.sqr(144));
