function button() {
   var name = $("#name").val();
   var documenttype = $("#documenttype").val();
   var identif = $("#identif").val();
   $("#xd").append("Your name is: " + name + "." + "<br>" + "Your document type is: " + documenttype + "." + "<br>" + "Your document number is: " + identif + ".");
}