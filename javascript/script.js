function myFunction() {
  var x, y, z, text;
  
   x = document.getElementById("numb").value;
  
  if(x <= 195 && x >=1){
  y = x/195;
  
  z = y*100;
  
 
  
  text = "You" + " " + "have" + " " + "visited" + " " + z.toFixed(2) + "%" + " " + "of" +  " " + "the" + " " + "countries" + " " + "in" + " " + "the" + " " + "world.";
  
  }
  else if(x < 1) {
    text= "I" + " " + "don't" + " "+ "think" + " " + "it's" + " " + "possible" + " " + "to" + " " + "go" + " " + "to" + " " + x + " " + "countries!";
  }
  else {
    y = x - 195;
    
    text= "Wow!" + " " + "You" + " " + "have" + " " + "been" + " " + "to" + " " + y + " " + "more" + " " + "countries" + " " + "than" + " " + "exist.";
    
  }
 
  document.getElementById("demo").innerHTML = text; 
  
}
