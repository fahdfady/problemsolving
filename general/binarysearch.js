//created via https://livecodes.io/ shoutout

// ** Binary Search **
// ?? Binary Search only works on a sorted array ??

// problem : given a sorted array of'n' elements and a target elemenet 't', fing the index of 't' in the array. return -1 if the target element is not found.
// arr = [-5, 2, 4, 6, 10], t = 10 ==> return 4
// arr = [-5, 2, 4, 6, 10], t = 6  ==> return 3
// arr = [-5, 2, 4, 6, 10], t = 20 ==> return -1

// // first try (wrong)
// let i;
// const binarysearch = (array, target) => {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return array[i];
//     } else {
//       return -1;
//     }
//   }
// };

// console.log(
//   binarysearch([-5, 2, 4, 6, 10], 10)
//   );

// // second try

const binarySearch = (array, target) => {
  let leftindex = 0;
  let rightIndex = array.length - 1;
    while (leftindex <= rightIndex) {
      let middleIndex = Math.floor((leftindex + rightIndex) / 2);

      if (array[middleIndex] === target) {
        return middleIndex;
      }

      if (array[middleIndex] > target) {
        rightIndex = middleIndex - 1;
      } else {
        leftindex = middleIndex + 1;
      }
    }
    return -1
  };

console.log(binarySearch([-5, 2, 4, 6, 10], -99));

// https://excalidraw.com/#json=MKRrnpJnSrOZ0cGMvCqy8,NE-OTbwQDZ3RS6oB95mfpA