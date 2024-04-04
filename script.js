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

function calcStrength() {
    let hashUpper = false;
    let hashLower = false;
    let hashNum = false;
    let hashSym = false;
     
    if (uppercaseCheck.checked) hashUpper = true;
    if (lowercaseCheck.checked) hashLower = true;
    if (numbersCheck.checked) hashNum = true;
    if (symbolsCheck.checked) hashSym = true;

    if (hashUpper && hashLower && (hashNum || hashSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hashLower || hashUpper) && (hashNum || hashSym) && passwordLength >= 6) { 
            setIndicator("#ff0");  
        } else {
            setIndicator("#f00");
        }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);
}

function handleCheckBoxChange() {
    checkCount = 0;
    allcheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
        checkCount++;
    });

    //special condition
    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allcheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
    copyContent();  
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected
    if(checkCount <=0) return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the journey to find new password

    // removed old password
    password = "";

    // let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUppercase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber(); 
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    


});