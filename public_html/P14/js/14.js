var bonus = 258320000;
var en = prompt("Type the number of employes your company have");
var result1 = bonus/en;

var ewt = prompt("How many hours do you work?");
var sph = 45000;
var gp = 20000;
var tpd = ewt*sph;
var result2 = tpd-gp;

var fpm = 5280;
var vpm1 = 12;
var vpm2 = 2.54;
var a = vpm1*vpm2;
var result3 = fpm*a;

console.log("Every worker will receive " + result1);
console.log("This will be the electricist pay: " + result2);
console.log("A mile have this quantity of centimeters " + result3);