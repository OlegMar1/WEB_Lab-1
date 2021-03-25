'use strict'

const prompt = require('prompt')

prompt.start()

prompt.get(['number'], function (err, result) {
  if (err) { return onErr(err) }
  let parsed = parseInt(result.number)
  let res = 1
  while (parsed > 1) {
    res *= parsed
    parsed--
  }
  console.log(res)
})

function onErr (err) {
  console.log(err)
  return 1
}
