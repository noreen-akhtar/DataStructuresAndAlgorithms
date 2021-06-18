// for (let i = 0; i <= 2; i++) {
//     console.log("- First level loop");
//     for (let j = 0; j <= 3; j++) {
//       console.log("-- Second level loop");
//     }
//   }

let arr = [[0, 2], [3 ,4],[5, 6]];
for (let i = 0; i <= arr.length; i++) {
  // [0, 2]
  // console.log("- First level loop");
  for (let j = 0; j <= 2; j++) {
    // arr[0][0]
    // arr[0][1]
    console.log(i, j);
  }
}