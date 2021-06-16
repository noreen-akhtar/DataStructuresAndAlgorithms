// Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10.
//  However, if it’s greater than 10,
//  print ‘greater than 10’. Also, deal with the case in which it’s equal
//  to 10 with an appropriate message.var x = 0 

let number = 10;

switch (number) {
  case 1:
    console.log("Less than 10");
    break;
  case 0:
    console.log("Less th");
    break;
  case 5:
    console.log("Less than 10");
    break;
  case 10:
    console.log("Equal to 10");
    break;
  case 11:
    console.log("Greater than 10");
    break;
  default:
    console.log("Unknown Value");
    break;
}