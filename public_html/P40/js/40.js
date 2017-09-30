function button() {
   var name = $("#name").val();
   var documenttype = $("#documenttype").val();
   var identif = $("#identif").val();
   var gendertype = $("#gendertype").val();
   var height = $("#height").val();
   var boolean = $("#boolean").val();
   if (boolean === 'true') {
      var answer = "Yes, do you live in Cartago";
      boolean = answer;
   }
   if (boolean === 'false') {
      var answer = "No, you don't live in Cartago";
      boolean = answer;
   }
   $("#xd").append("Your name is: " + name + "." + "<br>" + "Your document type is: " + documenttype + "." + "<br>" + "Your document number is: " + identif + "." + "<br>" + "Your gender is: " + gendertype + "." + "<br>" + "Your height is: " + height + "." + "<br>" + boolean);
}