'use strict'

let array = [9,8,6,3,4,5,1,7]




function BSort(array) {
  for (let i = 0, endI = array.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (array[j] > array[j + 1]) {
              let swap = array[j];
              array[j] = array[j + 1];
              array[j + 1] = swap;
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return array;
}

array=BSort(array)
console.log(array)