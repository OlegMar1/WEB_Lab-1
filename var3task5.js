'use strict'

const array = ['20-02-2023','21-03-2022','22-02-2021'];
let array2 =[]
for (let i = 0; i < array.length; i++) {
  array2[i] =  array[i].split('-');

}
let index

let maxYear = array2[2][2];
for (let i = 0; i < array.length; i++) {
  let element = array2[i][2];
  if (maxYear < element) {
    maxYear = element
    index=i
  }
}

let maxMoth = [0][1]
for (let i = 0; i < array2.length; i++) {
  if (array2[i][2] == maxYear) {
    if (maxMoth<array2[i][1]) {
      maxMoth=array2[i][1]
      index=i
    }
  }
}

let maxDay = [0][0]
for (let i = 0; i < array2.length; i++) {
  if (array2[i][2] == maxYear && array2[i][1] == maxMoth) {
    if (maxDay<array2[i][0]) {
      maxDay=array2[i][0]
      index=i
    }
  }
}
console.log(`Набйльша дата ${array[index]}`)
