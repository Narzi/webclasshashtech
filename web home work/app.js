 
for(var a=1;a<=100;a++){
	document.write("<p>" + a + "</p>");
	if(a%3==0 && a%5==0){
		document.write("<p>" +  "fizzBuzz"  + "</p>" );
	}

	if(a%3==0){
		document.write("<p>" +  "fizz"  + "</p>" );
	}

		if(a%5==0){
		document.write("<p>" +  "Buzz"  + "</p>" );
			}


			if(a%3!=0 && a%5!=0){
		document.write("<p>" +  "$x"  + "</p>" );
	}
}
	
// star
	for(var b=1;b<=5;b++){
		for(var c=1;c<=b;c++){
		document.write("*");
	}
		document.write("</br>");
	}



	
	

	
	