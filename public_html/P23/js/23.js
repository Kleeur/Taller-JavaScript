var inf1 = prompt("Type a date YYYY,MM,DD");
var inf2= prompt("Type a lesser date YYYY,MM,DD");

var o = new Date(inf1);
var t = new Date(inf2);

var calculate = o - t;

var d = Math.floor(calculate / (1000 * 60 * 60 *24));
var m = Math.floor(d / 30);
var y = Math.floor(m / 12);

console.log("First Date: " + inf1);
console.log("Second Date: " + inf2);
console.log("The difference in days between the dates are: " + d);
console.log("The difference in months between the dates are: " + m);
console.log("The total years are: " + y);

