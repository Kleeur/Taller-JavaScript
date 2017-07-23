var name = prompt ("Type your name");
var id = prompt ("Write your id type");
var number = prompt ("Type your id number");
var height = prompt ("Type your height");

function gender(){
   var gender = prompt('Type your gender Male=0/Female=1');
 if(gender == "1"){
      
      console.log("My gender is Female");
   }
 if(gender == "0"){
      
      console.log("My gender is Male");
   }
}

console.log("Hi, my name is " + name + ".");
console.log("My number of " + id + " is " + number + ".");
gender();
console.log("Your height is " + height + ".");