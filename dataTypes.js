//Primitive Data types//
/*  string
    number  (No Float values, decimal or non-decimal)
    boolean (true or false)
    undefined */
console.log("Primitive Data Types");
var s = "Hasnain";
var n = 110;
var t = true;
var u;
console.log(typeof s);
console.log(typeof n);
console.log(typeof t);
console.log(typeof u);


//Complex Data Types//
/*  Object      (arrays are also objects)
    Function */
console.log("Complex Data Types");
var x;
var array = [1,2,3,4,5];
var person = {name:"Hasnain Ali",age:17,gender:"Male",married:false};
function myfun() {};
console.log(typeof array);
console.log(typeof person);
console.log(typeof myfun);
console.log(typeof null);

//Undefined and Null are equal in Value, But Not equal in Type"
console.log(undefined==null);
console.log(undefined===null);