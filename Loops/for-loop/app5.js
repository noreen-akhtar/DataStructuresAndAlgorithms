// Consider the above array again and
//  find the smallest element in the array.

// var arr = [2,99,0,6,45,89]
// var min = Math.min.apply(Math, arr)
// console.log(min)

let array = [2, , 1, 6, 45, 89];
let smallest = array[0];

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i];
  }
}
console.log(smallest);