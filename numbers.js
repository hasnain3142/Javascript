var x = 15;
var y = "A";
var z = x*y;
console.log(z);
console.log(typeof(z));
console.log(isNaN(z));
console.log(z+6)

var a = Infinity;
var b = -2/0;
console.log(a,b,a==b,"a"+a);

var a = 14;
var string = a.toString();
var decimal = a.toString(10);
var binary = a.toString(2);
var octal = a.toString(8);
var hexadecimal = a.toString(16);

console.log(string,decimal,binary,octal,hexadecimal);
 

 var g = 3.976;
 console.log(g.toExponential(1));
 console.log(g.toFixed(0));
 console.log(g.toPrecision(1));

 var n = new Number(12); //created an object
 console.log(typeof(n)); 
 var m = n.valueOf();
 console.log(typeof(m));

 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);
 console.log(Number.POSITIVE_INFINITY);
 console.log(Number.NEGATIVE_INFINITY);
 console.log(Number.NaN);

 console.log(Number("12"));
 console.log(parseInt("19.9"));
 console.log(parseFloat("10 y"));
