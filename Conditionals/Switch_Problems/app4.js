/*Suppose you are given a number and you need to
 check whether it’s even or odd. How'd you do that?*/

 let number = 10;
 
 switch (number % 2) {
     case 0:
         console.log("Even number");
         break;
     case 1:
         console.log("Odd number");
 }