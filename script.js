// inputs and outputs

let customWord = document.getElementById("customWord")
let circle1Color = document.getElementById("circle1Color")
let circle1ColorOut = document.querySelector("output[for=circle1Color]")
let circle2Color = document.getElementById("circle2Color")
let circle2ColorOut = document.querySelector("output[for=circle2Color]")
let circle3Color = document.getElementById("circle3Color")
let circle3ColorOut = document.querySelector("output[for=circle3Color]")

// inputs for cats

let fatcatScale = document.getElementById("fatcatScale")
let fatcatMoveX = document.getElementById("fatcatMoveX")
let fatcatMoveY = document.getElementById("fatcatMoveY")

let hatcatScale = document.getElementById("hatcatScale")
let hatcatMoveX = document.getElementById("hatcatMoveX")
let hatcatMoveY = document.getElementById("hatcatMoveY")

let scaredcatScale = document.getElementById("scaredcatScale")
let scaredcatMoveX = document.getElementById("scaredcatMoveX")
let scaredcatMoveY = document.getElementById("scaredcatMoveY")

let buffcatScale = document.getElementById("buffcatScale")
let buffcatMoveX = document.getElementById("buffcatMoveX")
let buffcatMoveY = document.getElementById("buffcatMoveY")

let studycatScale = document.getElementById("studycatScale")
let studycatMoveX = document.getElementById("studycatMoveX")
let studycatMoveY = document.getElementById("studycatMoveY")

let isthiscatScale = document.getElementById("isthiscatScale")
let isthiscatMoveX = document.getElementById("isthiscatMoveX")
let isthiscatMoveY = document.getElementById("isthiscatMoveY")

// elements

let theWord = document.getElementById("theWord")
let circle1 = document.getElementById("circle1")
let circle2 = document.getElementById("circle2")
let circle3 = document.getElementById("circle3")
let fatcat = document.getElementById("fatcat")
let hatcat = document.getElementById("hatcat")
let isthiscat = document.getElementById("isthiscat")
let buffcat = document.getElementById("buffcat")
let scaredcat = document.getElementById("scaredcat")
let studycat = document.getElementById("studycat")

// functions - change text, change color, update outputs, change scale, change position

function changeText(object, textInput) {
    object.textContent = textInput.value
}

function changeColor(object, color) {
    object.style.backgroundColor = color.value
}

function updateOutput(object, input) {
    object.textContent = input.value
}

function changeScale(object, scale) {
    object.style.width = scale.value + "px"
}

function movePosition(object, xPos, yPos) {
    object.style.transform = `translate(${xPos.value}px, ${yPos.value}px)`
}

// event listeners to run the functions

customWord.addEventListener("input", function(){
    changeText(theWord, customWord);
})

//circles

circle1Color.addEventListener("input", function(){
    changeColor(circle1, circle1Color);
    updateOutput(circle1ColorOut, circle1Color);
})

circle2Color.addEventListener("input", function(){
    changeColor(circle2, circle2Color);
    updateOutput(circle2ColorOut, circle2Color);
})

circle3Color.addEventListener("input", function(){
    changeColor(circle3, circle3Color);
    updateOutput(circle3ColorOut, circle3Color);
})

//cats grow

fatcatScale.addEventListener("input", function(){
    changeScale(fatcat, fatcatScale);
})
hatcatScale.addEventListener("input", function(){
    changeScale(hatcat, hatcatScale);
})
scaredcatScale.addEventListener("input", function(){
    changeScale(scaredcat, scaredcatScale);
})
buffcatScale.addEventListener("input", function(){
    changeScale(buffcat, buffcatScale);
})
studycatScale.addEventListener("input", function(){
    changeScale(studycat, studycatScale);
})
isthiscatScale.addEventListener("input", function(){
    changeScale(isthiscat, isthiscatScale);
})

//cats move

fatcatMoveX.addEventListener("input", function(){
    movePosition(fatcat, fatcatMoveX, fatcatMoveY);
})
fatcatMoveY.addEventListener("input", function(){
    movePosition(fatcat, fatcatMoveX, fatcatMoveY);
})

hatcatMoveX.addEventListener("input", function(){
    movePosition(hatcat, hatcatMoveX, hatcatMoveY);
})
hatcatMoveY.addEventListener("input", function(){
    movePosition(hatcat, hatcatMoveX, hatcatMoveY);
})

scaredcatMoveX.addEventListener("input", function(){
    movePosition(scaredcat, scaredcatMoveX, scaredcatMoveY);
})
scaredcatMoveY.addEventListener("input", function(){
    movePosition(scaredcat, scaredcatMoveX, scaredcatMoveY);
})

buffcatMoveX.addEventListener("input", function(){
    movePosition(buffcat, buffcatMoveX, buffcatMoveY);
})
buffcatMoveY.addEventListener("input", function(){
    movePosition(buffcat, buffcatMoveX, buffcatMoveY);
})

studycatMoveX.addEventListener("input", function(){
    movePosition(studycat, studycatMoveX, studycatMoveY);
})
studycatMoveY.addEventListener("input", function(){
    movePosition(studycat, studycatMoveX, studycatMoveY);
})

isthiscatMoveX.addEventListener("input", function(){
    movePosition(isthiscat, isthiscatMoveX, isthiscatMoveY);
})
isthiscatMoveY.addEventListener("input", function(){
    movePosition(isthiscat, isthiscatMoveX, isthiscatMoveY);
})

// loads

updateOutput(circle1ColorOut, circle1Color);
updateOutput(circle2ColorOut, circle2Color);
updateOutput(circle3ColorOut, circle3Color);
movePosition(fatcat, fatcatMoveX, fatcatMoveY);
movePosition(hatcat, hatcatMoveX, hatcatMoveY);
movePosition(scaredcat, scaredcatMoveX, scaredcatMoveY);
movePosition(buffcat, buffcatMoveX, buffcatMoveY);
movePosition(studycat, studycatMoveX, studycatMoveY);
movePosition(studycat, studycatMoveX, studycatMoveY);




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
