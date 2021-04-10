var firstNumber= Math.floor(Math.random()*6) + 1;

var secondNumber=Math.floor(Math.random()*6)+1;

var randomDiceImage1= "png/dice-"+ firstNumber +".png";

var randomDiceImage2="png/dice-"+ secondNumber +".png";

 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

 document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

 if(firstNumber>secondNumber){
    document.querySelector("h1").innerHTML="🚩play1 wins!";
 }
 else if(secondNumber>firstNumber){
   document.querySelector("h1").innerHTML="play2 wins!🚩"
 }
 else {
   document.querySelector("h1").innerHTML="Draw!";
 }
