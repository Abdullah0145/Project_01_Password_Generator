// Custom attribute Syntax in JS//const a = document.querySelector("[data-lengthSlider]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const  copyMsg = document.querySelector("[data-copyMsg]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const inputSlider = document.querySelector("[data-lengthSlider]");
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

// In starting password will be empty. 
let password = "";
// In starting PasswordLength will be equal 10.
let passwordLength = 10;
// In starting one checkbox will be tick.
let checkCount = 1;
// yaha pr mai handleSlider ko call kr diya.
handleSlider();
// set strength circle color to grey

// start function implement
// set passwordLength - ye set kr deta hai password ki length ko
function handleSlider() {
    inputSlider.value = passwordLength; // input slider hai, iski jo value hai ko mai chahta hu staring me, ye equal honge mere password ki length ke. means 10th ke equal ho gya.
    lengthDisplay.innerText = passwordLength; // ko mai chahta hu lengthDisplay ke under innerText pra honga ye equal honge mere password ki length ke jiske under ham 10 rak dete.
    // or bhi kuch krna chahiye ? HW
}

// color set krna strength ka , 
function setIndicator(color) {
    // indicator ke under jao, dot style me jao, iska jo bgcolor hai usko inputColor ke equal kr do.
    indicator.style.backgroundColor = color;
    // shadow HW shadow set krna strength ka
}

// getRndInteger me hamne two value pass kr diya min and max.
function getRndInteger(min, max) {
    // Math.random() function kya krta hai? math.random() 0 se 1 ke beach me ek random number generate krte deta hai.
    return Math.floor(Math.random() * (max - min)) + min; // Math.random() function krne se mera minimum no.(0) and maximum no.(1) hai un dono ke beach me kohi ek random number generate hoga. agar mai isko multiply kr do max - min ke sath ko ab apka answer kaha tak ayega 0 se leakr max - min tak aagya. posibility ho ke ye (Math.random() * (max - min) ek floating number ho sakta hai, ko mai kya kro isko? ko maine isko round off (Math.floor) kr diya for example: 6.4 aaya ko Answer hoga only 6, abhi bhi iski range kya hai? abhi bhi iski range 0 se lekar max - min hai, mujhe kya range chaiye? mujhe range chaiye min se max ko mai min plus(+) kr diya. ko isne hame min se max ke beach random number (integer) dega. isme 0 inclusive hota hai aur 1 exclusive hota hai. 
}

// mujhe ek random no. dalna hoga iske under password me single digit(0-9) ka ko kaha se kaha tak number chaiye hoga mujhe? 0 se 9 tak number chaiye hoga mujhe, because 0-9 single didgit number hota hai. isliye maine upper function me maine max aur min letha tha taki ab mai yaha pr fuction ke under old wala fuction ko use kr paoo getRndInteger(0,9), kon se range me? 0-9 ke range me lekar aoo.    
function generateRandomNumber() {
    return getRndInteger(0,9);
}

// 
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