var number1 = prompt("Type one number");
var number2 = prompt("Type another number");
result = Math.pow(number1, number2);
   console.log("Potentiation of " + number1 + " and " + number2 + " is: " + result);

result = Math.pow(number2, number1);
   console.log("Potentiation of " + number2 + " and " + number1 + " is: " + result);

result = number1*number2;
   console.log("Multiplication of " + number1 + " and " + number2 + " is: " + result);

result = number1/number2;
   console.log("Divition of " + number1 + " and " + number2 + " is: " + result);

result = number2/number1;
   console.log("Divition of " + number2 + " and " + number1 + " is: " + result);
   
result = number1%number2;
   console.log("Module of " + number1 + " and " + number2 + " is: " + result);