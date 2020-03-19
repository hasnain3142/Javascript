var a1 = [1,2,3,4,5];
var a2 = new Array(1,2,3,4,5);
console.log(a1.concat(a2));
a1.push(a2)
a1[2] = 0
console.log(a1);


var table = ["apple","banana","mango"];
for (var i = 0; i<table.length; i++) {
    console.log(table[i]);
}

console.log(Array.isArray(table));
console.log(table instanceof Array);

console.log(table.toString());
console.log(table.join(" "));

table.push("orange");
var len = table.push("grapes");
table.pop();
console.log(len,table);

table.shift();
table.unshift("Kiwi");
console.log(table)

console.log(table.splice(1,1,"Pear"));
console.log(table)
