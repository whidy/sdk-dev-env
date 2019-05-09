const { first, last, id, ids } = require('./base/test')
import { port, min } from './base/test_modules'
// 1. Default Parameters in ES6

let link = function(height = 50, color = 'red', url = 'http://azat.co') {
  console.log(height, color, url)
}

console.log('==========')
console.log('1. Default Parameters in ES6')
link(60)
console.log('==========')

// 2. Template Literals in ES6

let name = `Your name is ${first} ${last}.`
let url = `http://localhost:3000/api/messages/${id}`

console.log('==========')
console.log('2. Template Literals in ES6')
console.log(name, url)
console.log('==========')

// 3. Multi-line Strings in ES6

let roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`

console.log('==========')
console.log('3. Multi-line Strings in ES6')
console.log(roadPoem)
console.log('==========')

// 4. Destructuring Assignment in ES6

let { json: jsonMiddleware } = { json: '{a:1}' }
let [num1, num2] = [1, 3]

console.log('==========')
console.log('4. Destructuring Assignment in ES6')
console.log(jsonMiddleware)
console.log(num1, num2)
console.log('==========')

// 5. Enhanced Object Literals in ES6

console.log('==========')
console.log('5. Enhanced Object Literals in ES6')
console.log('研究测试中。')
console.log('==========')

// 6. Arrow Functions in ES6

var logUpperCase = function() {
  this.string = this.string.toUpperCase()
  return () => console.log(this.string)
}
var messages = ids.map(value => `ID is ${value}`)

console.log('==========')
console.log('6. Arrow Functions in ES6')
logUpperCase.call({ string: 'es6 rocks' })()
console.log(messages)
console.log('==========')

// 7. Promises in ES6

let wait1000 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })

console.log('==========')
console.log('7. Promises in ES6')
wait1000()
  .then(function() {
    console.log('Yay!')
    return wait1000()
  })
  .then(function() {
    console.log('Wheeyee!')
  })
console.log('==========')

// 8. Block-Scoped Constructs Let and Const

function calculateTotalAmount(vip) {
  const amount = 0
  if (vip) {
    const amount = 1
    console.log(`inner-1: ${amount}`)
  }
  {
    // more crazy blocks!
    const amount = 100
    console.log(`inner-2: ${amount}`)
    {
      const amount = 1000
      console.log(`inner-3: ${amount}`)
    }
  }
  console.log(`outter: ${amount}`)
}

console.log('==========')
console.log('8. Block-Scoped Constructs Let and Const')
console.log(calculateTotalAmount(true))
console.log('==========')

// 9. Classes in ES6

class Rectangle {
  // constructor
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  // Getter
  get area() {
    return this.calcArea()
  }
  // Method
  calcArea() {
    return this.height * this.width
  }
}
const square = new Rectangle(10, 10)

console.log('==========')
console.log('9. Classes in ES6')
console.log(square.area)
console.log('==========')

// 10. Modules in ES6

console.log('==========')
console.log('10. Modules in ES6')
console.log(port, min(4, 1))
console.log('==========')

console.log('All shows completes!')
