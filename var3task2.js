'use strict'

const promt = require('prompt')

promt.start()

promt.get(['lString', 'sString'], function (err, result) {
  if (err) { return onErr(err) }
  console.log(result.lString.includes(result.sString))
})

function onErr (err) {
  console.log(err)
  return 1
}
