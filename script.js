inputs

customWord
theWord
circle1Color
circle2Color
circle3Color

inputs for cats

fatcatScale
fatcatMoveX
fatcatMoveY

hatcatScale
hatcatMoveX
hatcatMoveY

scaredcatScale
scaredcatMoveX
scaredcatMoveY

elements

circle1
circle2
circle3
fatcat
hatcat
isthiscat
buffcat
scaredcat
studycat


































/* 
        _   _  ___ _____ _____ ____          
        | \ | |/ _ \_   _| ____/ ___|         
 _____  |  \| | | | || | |  _| \___ \   _____ 
|_____| | |\  | |_| || | | |___ ___) | |_____|
        |_| \_|\___/ |_| |_____|____/         

// declaring a new variable in JS
// data variables
let num=6
let numInt=4
let numFloat=2.1

//string variables
let name = "Laurennnn"
let firstName = "Lauren"
let lastName = "I don't want to put my last name public"

let student1 = {
    name: "dan",
    major: "graphic design",
    age: 20,
}

let student2 = {
    name: "jane",
    major: "studio art",
    age: 21,
}

console.log(name)

// retrieving specific variables
console.log(student1)

// retrieving specific key
console.log(student1.name)

// boolean, only 2 values (true or false) in JS
let isDataLoaded=false
    // once the data is loaded, change to true
isDataLoaded=!isDataLoaded // exclaimation means turn it onto its opposite
console.log(isDataLoaded) // should be true

// array in JS
let nums = [1, 2, 3, 4, 5]
let nums2 = ["Jane", "John", "Timmie"]
nums = ["hello", 500, "goodbye"]
let students = [
    {name: "Heather", major: "GD"},
    {name: "Rachel", major: "Architecture"},
    {name: "Timmie", major: "CS"},
]
console.log(students.length) //see how many items are inside the array

//index starts at 0 and the last index will be the length-1

console.log(nums[0]) //index the first item
console.log(nums[1]) //index the second item
console.log(nums[nums.length-1]) //index the last item

// index object in an array
console.log(students[0]) //index first item
console.log(students[0].name) //index first item specific key

// let vs const variables in JS
let name2 = "Hannah"
name2 = "Lauren"
    // can reassign new values to variables

// let nums =[1,2,3,4,5]
// nums = [1,2,3]
// nums = "happy"
    // can reassign new values to variables

/*const name = "your mom"
name2 = "Hannah"
// will prompt erros, cannot change const variables


const PI = 3.14
// you don't ever change Pi so it's good

// var name = "Yu" // old way to declare a variable, use let or const now

// functions in JS
function addThreeToNum(num) {
    return num + 3
}

addThreeToNum(1) // the things we put in () are called parameters

console.log (addThreeToNum(1)) // call this function, should be 4
console.log (addThreeToNum(4)) // call this function, should be 7

function addTwoNums(num1, num2) {
    return num1 + num2
}
console.log(addTwoNums(2, 3)) //calling function should be 5

// loops in JS

for (let i = 0; i < 4; i++) {
    console.log(i)
}
// i++ is i plus 1, console log increment by one until i=4. variables should return 0, 1, 2, and 3
// let i=0 starting

let courses = ["data vis", "typography", "digital platforms"]

for (let i = 0; i < 3; i++) {
    console.log(courses[i])
}
//will log the courses

let courses2 = ["data vis", "typography", "digital platforms", "history of GD", "drawing II"]

for (let i = 0; i < courses.length; i++) { //courses.length moves through the array depending on how many items it has in it
    console.log(courses[i])
}

//////////////////////////////////


document.getElementById("paragraph").style.color ="red"

/*
document = in the HTML
getElementById = target element using ID
("paragraph") = target the element that has this ID


document.getElementById("paragraph").innerHTML += " addition with JS :D :D :D"

let myElement = document.getElementById("paragraph")

myElement.style.color = "purple"
myElement.style.backgroundColor = "yellow"
myElement.innerHTML += " hello world!"

// can pull real time data into website with JS

*/
