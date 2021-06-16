// Consider the above array again and
//  find the smallest element in the array.

// var arr = [2,99,0,6,45,89]
// var min = Math.min.apply(Math, arr)
// console.log(min)

let arr = [2, , 1, 6, 45, 89];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (smallest > arr[i]) {
    smallest = arr[i];
  }
}
console.log(smallest);