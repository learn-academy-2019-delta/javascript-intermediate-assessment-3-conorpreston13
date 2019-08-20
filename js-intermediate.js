// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
let findFib = function (num) {
  if (num === 1){
    return [0, 1];
  } 
  else {
    let newNum = findFib(num - 1);
    newNum.push(newNum[newNum.length - 1] + newNum[newNum.length - 2]);
    return newNum;
  }
}
 console.log(findFib(10));

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
let oddChecker = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0 && typeof arr[i] === "number"){
      newArr.push(arr[i])
    }
    
  }
  return newArr
}
console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// i do not know for sure how to only return numbers. maybe with typeOf()? If so, i do not know where to call that method.

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["a", "t", "l", "e", "d"]
// Expected output: ["d", "e", "l", "t", "a"]
let reverseArr = (arrType) => {
  return arrType.reverse()
}
console.log(reverseArr(originalArray1))
console.log(reverseArr(originalArray2))

// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })
// let multTwo = (arr) => {
//   let splArr = ...arr
//   return splArr * 2
// }
// console.log(multTwo([3, 4, 5]))



// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3
let findL = (str) => {
  let newLArr = []
  let newStr = str.toLowerCase().split('')
    for (let i = 0; i < str.length; i++)
    if(newStr[i] === 'l'){
       newLArr.push(newStr[i])
    }
    return newLArr.length;
}
console.log(findL(ourString))

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "llamas"
// Expected output: “am”
let findMiddle = (letters) => {
  if(letters.length % 2 !== 0){
    
  } else {
    
  }
}



// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// i am havin trouble starting this program
class Sphere{
  constructor(radius){
  this.radius = radius
  }
  getArea(){
    let pi = Math.PI
    return 4 * pi this.radius **2
  }
}
var mySphere = new Sphere(6)

console.log(mySphere.getArea())

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
let { doors, transmission } = myCar.specs
console.log(doors, transmission)

// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
