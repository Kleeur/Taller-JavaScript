var salary = parseInt(prompt("Type your salary here"));
var fount = parseInt(prompt("Type your % of retention in your salary"));

var rr =(salary * fount) / 100;
var result = salary - rr;

console.log("Your salary is =" + salary);
console.log("Your retention % is = " + fount);
console.log("The price you need to pay is = " + rr);
console.log("Your total gain is = " + result);