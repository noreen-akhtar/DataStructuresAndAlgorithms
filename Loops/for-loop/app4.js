// Consider you are given an array [2,0,1,6,45,89].
//  You need to 
// find the largest element in the array. How’d you do that?


// var arr = [2,0,1,6,45,89]
//     max = Math.max.apply(null, arr);

// //For Objects
// var arr = [{a: 2},{a: 0},{a:1},{a:6},{a:45},{a:89}]
// var values = arr.map(val => val.a);
// var max = Math.max.apply(null, values);
// console.log(max)


let array = [2, 0, 1, 6, 45, 89];
let largest = 0;

for (let i = 0; i < array.length; i++) {
  if (largest < array[i]) {
    largest = array[i];
  }
}
console.log(largest);