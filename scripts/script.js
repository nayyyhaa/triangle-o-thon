let dateOfBirth = document.querySelector('.dob-input');
let luckyNum = document.querySelector('.lucky-num-input');
let submitBtn = document.querySelector('.submit-btn');
let output = document.querySelector('.output');
let messages = ['Yay! Your Birthday is lucky.', 'Oopsie! Your birthday is not lucky.', 'Please enter valid Inputs!'];
let messageIndex;
//Functions

function validateInputFields() {
    if(dateOfBirth.value && luckyNum.value) return true;
    return false;
}

function getDateSum() {
    let dateString = dateOfBirth.value.replace(/-/g,'').split('');
    return dateString.reduce((total,el) => total+Number(el),0)
}

function displayOutput() {
    output.innerText = messages[messageIndex];
}

function validateLuckyBirthday() {
    if(validateInputFields()) {
        let sum = getDateSum();
        if(sum % luckyNum.value === 0) messageIndex = 0;
        else messageIndex = 1;
    }
    else messageIndex = 2;
    displayOutput();
}


//Event listeners

submitBtn.addEventListener('click',validateLuckyBirthday);