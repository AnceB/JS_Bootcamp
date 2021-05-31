function findSum(numbers) {
    let sum = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }
    for (let nr of numbers) {
    sum += nr
    }
    return sum
}

function reverseString(text) {
    let reversedText = ' '
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i]
    }
    return reverseText
}


function sumOfPowers(arr, power) {
    let sum = 0
    for (let i = 0; i < arr.lenght; i++) {
        sum += Math.pow(arr[i], power)
    }
    return sum
}

sumOfPowers ([1, 2, 3], 2)

class Animal {

    talk() {

    }

    static name() {
        console.log('hello')
    }
}

let animal = new Animal()

let numbers = [1, 2, 3, 4, 5]

// numbers.sort(function(a, b) {

// })

function sortFunction(a, b) {
    return a - b
}

numbers.sort(sortFunction)

let nrs = [1, 4, 7, 8, 9, 12, 13, 15, 16]
for (let i = 0; i < nrs.length; i++) {
    nrs[i] = nrs[1] * 2
}

console.log(nrs)


function fibonacci(n) {
    let firstNumber = 0
    let secondNumber = 1
    let currentNumber = null

    for (let i = 2; i < n; i++) {
        currentNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = currentNumber
    }

    return currentNumber
}

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }
    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
}


let nr = 8
let shifted = nr >> 1
// bit shifting


class Array {
    constructor() {
        this.collection = []
    }
}

let firstArray  = new Array()
let secondArray = new Array()

firstArray.collection.push(i)
secondArray.collection.push(5)
