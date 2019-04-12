const a = require('./base/test')
const str = 'this is base version'
console.log(a.ddd + 1)
console.log(str)

function bb() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111)
    }, 500)
  }).then(res => {
    console.log(res + '!')
  })
}

async function aa() {
  await setTimeout(() => {
    console.log('adsadsadsa')
  }, 1000)
}
aa()
bb()
let arr = [1, 2, 3, 4]
function ts(c, ...a) {
  console.log(c, a)
}

ts('c', arr)
