 var a = parseInt(prompt ("Type a value for the first cathetus"));
 var b = parseInt(prompt ("Type a value for the second cathetus"));
 
 var c = parseInt(Math.pow(a, 2));
 var d = parseInt(Math.pow(b, 2));
 var e = parseInt(c + d);
 var h = parseInt(Math.pow(e, 0.5));

 console.log("The hypotenuse is " + " a² + b² = h²" );
 console.log( c +" + "+ d +" = "+ e);
 console.log("√"+e +" =  "+ "√"+h+"² = "+ h);
 console.log("Hipotenuse= " +  h);