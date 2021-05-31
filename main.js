// // let a = 123
// // let someText = "dasda"
// // let some_number = 31

// // let pi = 3.14

// // // 2 * Pi * radius
// // let radius = 7;
// // let circle = 2* pi * radius;

// // console.log(
// //     circle
// // );

// // Booleans
// // true
// // false

// // let i_am_teaching = true;
// // let you_are_listening = false;

// // console.log(i_am_teaching);

// // let i_am_teaching_or_you_are_listening = i_am_teaching || you_are_listening



// // let a = false;
// // let b = true;
// // let f = a || b;

// // console.log(f)


// // let well_fed = true;
// // let inspired = true;

// // let happy = well_fed && inspired;
// // console.log(happy)

// // let angry = !happy

// // console.log(angry)



// // 2 * Pi * radius
// // const pi = 3.14

// // let radius = 7;
// // let circle = 2* pi * radius;

// // console.log(
// //     circle
// // );

// // let first_name = "Ance"
// // let last_name = "Bumbule"
// // let full_name = first_name + " " + last_name
// // console.log(full_name)

// // // Defining a function
// // function greet() {
// //     console.log("Hello, World!")
// // }

// // let name = 

// // function greet(name) { //name is an argument or parameter
// //     console.log("Hello, " + name)
// // }
// // // Calling a function
// // greet("World")

// // function boilEggs () {
// //     putWaterBoiling();
// // }

// // function putWaterBoiling () {
// //     console.log("Water is boiling!")
// // }

// // boilEggs()


// // let a = 2 + 3
// // let b = 3

// // function subtract(a,b) {
// //     console.log (a-b)
// // }

// // subtract (100,1)


// let nameObject = {
//     firstName: "Ance",
//     lastName: "Bumbule",
//     height: 165,
//     hairColor: "brown"
//     fullName: function() {
//         return this.firstName + this.lastName;
//     }
// }

// //let fullName = nameObject.firstName + " " + nameObject.lastName

// console.log(fullName);

// nameObject ["fisrtName"]

// console.log(nameObject.fullName("Hep"))


// function multiply (a, b) {
//     let result = a * b
//     resturn result
// }

// function add(a,b) {
//     let result = a + b
//     return result
// }

// function subtract (a, b) {
//     let result = a - b
//     return result
// }

// let resultOfAdd = add(100,3)

// add(100,3)


// let u = 10
// u = u + 2

// let r = 100
// r =r -2 // 98
// r -= 2 // 96

// let mm = 5

// // ++ incrementing
// let p = 5
// p = p + 1 //6
// p += 1 // 7

// // -- decrementing
// let qw = 100
// qw = qw - 1 // 99
// qw -= 1 // 98
// qw -- // 97
// --qw // 96


// let animal = {
//     name: "Good doggo",
//     color: "white and black",
//     height: 100,
//     pet: function() {
//         console.log('The dog feels good when you pet it')
//     },
//     feed: function(food) {
//         console.log("The dog is enjoying eating " + food)
//     }

// }

// animal.pet()
// animal.feed('sausages')


// //Conditional statements
// // Branching
// if (5 == 6) {
//     console.log('Hello!')
// }
// else {
//     console.log('noooo!')
// }


// if (true) {
//     console.log("First block")
// }

// if (false) {
//     console.log("Second block")
// } else if (true) {
//     console.log("Third block")
// }

// let animal = "cat"

// let firstletter = animal[0]
// console.log(firstletter)       

// let secondletter = animal[1]
// console.log(secondletter)

// animal.indexOf('t')
// console.log(animal.indexOf('t'))

// let planet = "Neptune"

// console.log(planet[0])
// console.log(planet[5])




// let magicword = "abrakadabra"

// console.log(magicword.toUpperCase())

// let sun = "SUN"

// console.log(sun.toLowerCase())

// console.log("abc" == "abc")
// console.log("abc" .toUpperCase == "ABC"())

// let newWord = magicword.slice(4)
// console.log(newWord)

// let otherWord = magicword.slice(4, 7)
// console.log(otherWord)

// console.log(otherWord[0])

// let a = "hello\n\n\n\n\world"

//Arrays
// let a = 'abc'
// let b = 5
// let arr = [a, b, 'QQ', true, false]
// let arrlenght = arr.length

// console.log(arr[0])

// arr.push('latest value')

// console.log(arr[5])

// let numbers = [1, 2, 3, 4, 5]

// delete numbers[0]

// console.log(numbers)






//For-loop

// for (let i = 0; i < 10; i+1) { //This is dangerous, this can freeze the computer
//     console.log(i)
// }

// let names = ['Ance', 'Anna', 'Lina']
// console.log(names[0])
// console.log(names[1])

// for (let i = 0; < names.length; i++) {
//     console.log(names[i])
// }


// For/Of Loop
// for (element of names) {
//     console.log(element)
// }

// let numbers = [100, 500, 1000, 5000]

// let sum = 0
// for (nr of numbers) {
//     sum += nr //same as sum = sum + nr
// }


// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }



//Create two variable, assing numbers to those variables, and 
// let a = 5
// let b = 10


// The parameter weekday is true if it is a weekday, and the parameter vacation is true,
// if we are on vacation
// We sleep in if it is not a weekday or we're on vacation, return true if we sleep in

// sleepIn(false, false) => true
// sleepIn(true, ture) => false
// sleepIn(false,true) => true

//Given a string name, e.g. Josh, returna greeting of the form "Hello, Josh!"



// -------------------------------------------------


let isSunny = true
let isSpring = true
let isRaining = false
let isHumid = true

let isSummerSoon = isSunny && isSpring // If both statement are true
let itsGoingToBeThunder = isRaining || isHumid //If one of the statemnets is true

if (!isSummerSoon) {
    console.log('lets get the body ready')
} else if (!itsGoingToBeThunder) {
    console.log('Im gonna need my umbrella')
} else {
    console.log("What is the weather then?")
}

// for (let i = 0; i < 10; i++) { // i ++ (incerements by one value)
//     console.log(i)
// }

// for (let i = 0; i < 10; i +=2) {
//     console.log(i)
// }

let seasons = ['winter', 'spring', 'summer', 'autumn']
console.log(seasons.length)
console.log(seasons[1])

seasons[1] = 'The season  of the flowers'
console.log(seasons)

// for (let i = 0; i < 4; i++) {
//     console.log(seasons[i])
// }

// For-Of loop
// for (el of seasons) {
//     console.log(el)
// }


// let numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for (nr of numbers) {
//     sum += nr
// }
// console.log(sum)

// Defining the function
function getSum(numbers) {
    let sum = 0
    for (n of numbers) {
        sum += n
    }
    return sum
}

// Calling the function
getSum([1, 2, 3, 4, 5]) // An array is defined within square brackets

let ourSum = getSum([1,2,3,4,5])
console.log(ourSum)