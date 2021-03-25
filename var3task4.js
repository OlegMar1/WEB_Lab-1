'use strict'

const prompt = require('prompt')
let array = []
let number

prompt.start()
console.log('Введіть відсортований масив розділяючи числа пробілами та елемент який шукаємо')

prompt.get(['arr', 'num'], function (err, result) {
  if (err) { return onErr(err) }
  array = result.arr.split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i])
  }
  number = parseInt(result.num)

  function SearchValue (array, number) {
    let first = 0; //left endpoint
    let last = array.length - 1; //right endpoint
    let position = 0;
    let found = false;
    let middle;

    while (found === false && first <= last) {
      middle = Math.floor((first + last) / 2);
      if (array[middle] == number) {
        found = true;
        position = middle;
      } else if (array[middle] > number) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }
    return position + 1;
  }
  const index = SearchValue(array, number)
  console.log(index)
})
function onErr (err) {
  console.log(err)
  return 1
}
