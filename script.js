//Custom attribute Syntax in JS//const a = document.querySelector("[data-lengthSlider]");
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const  copyMsg = document.querySelector("[data-copyMsg]");
// ID attribute Syntax in JS//const b = document.querySelector("#data-lengthSlider");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
// CLASS attribute Syntax in JS//const b = document.querySelector("#data-lengthSlider");
const generateBtn = document.querySelector(".generateButton");
// All Checkboxes for using Syntax in JS// const allcheckBox = document.querySelectorAll("input[type=checkbox]");
const allcheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
//set strength circle color to grey

//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or bhi kuch krna chahiye ? HW
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow HW
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97,123))
}

function generateUppercase() {
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}




