var x = "Apple";
var y = new String("Apple");
console.log(x==y);
console.log(x===y);

//String Methods
var s = "Hello"
console.log("The number of characters in",s,"are",s.length);

var sen = "This world is a beautiful world";
var fIndex = sen.indexOf("world",0);
var lIndex = sen.lastIndexOf("world",31);
console.log(sen.length+"\n"+fIndex+"\n"+lIndex);

var demo = "Google Microsoft Apple Amazon Facebook Facebook";
a = demo.slice(-8,);
b = demo.substring(7,16);
c = demo.substr(0,6);
console.log(a,b,c);

demo = demo.replace("Facebook","LinkedIn")
demo = demo.replace(/Facebook/g,"LinkedIn")
demo = demo.concat(" Github")
console.log(demo);

text1 = demo.toUpperCase();
text2 = demo.toLowerCase();
console.log(text1,text2)

var name = "HASNAIN";
console.log(name.charAt(5));
console.log(name[6]);
console.log(name.charCodeAt(4));

var lst = "1 2 3 4"
var a1 = lst.split(" ")
console.log(a1)