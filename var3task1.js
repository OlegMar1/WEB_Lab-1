'use strict'

const prompt = require('prompt')

prompt.start()

prompt.get(['sentence'], function (err, result) {
  if (err) { return onErr(err) }
  const word = result.sentence.split(' ')
  console.log(word)
})

function onErr (err) {
  console.log(err)
  return 1
}
