var mins = parseInt(prompt("Type the actual min salary"));
var salary = parseInt(prompt("Type your salary"));
var daysw = parseInt(prompt("Type how many days you worked"));
var trnsaux = 84600;
var truesalary = (salary/30)*daysw;

   if (salary <= (mins*2)) {
      console.log("You will receive transport help equal to = " + trnsaux);
      console.log("This will be your total pay " + truesalary);
      
   }else if (salary >= (mins*4)){
      var fount = parseInt(prompt("Type the % of fount retention"));
      var truesalary2 = (salary*fount)/100;
      var truesalary = truesalary-truesalary2;
      console.log("You have retention in the fount");
      console.log("This is your final pay: " + truesalary);
   }