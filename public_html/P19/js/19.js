var num1 = parseInt(prompt("Type a number here"));
   if (num1 >= 0) {
      console.log("You need to introduce a number minor to zero");
   }else if (num1 <= 0) {
      var posotive = num1*-1;
      console.log(posotive);
   }