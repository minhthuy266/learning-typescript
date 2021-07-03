let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// Built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumber: number[] = [6, 7, 2]
let truths: boolean[] = [true, true, false]

// Classes
class Car {}

let car: Car = new Car()

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x":10, "y":20}'
const coordinates: {x: number; y: number} = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20}

// 2. When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean = false

for (let i = 0; i < words.length; i++) {
  const el = words[i]
  if (el === 'green') {
    foundWord = true
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  const el = numbers[i]
  if (el > 0) {
    numberAboveZero = numbers[i]
  }
}
