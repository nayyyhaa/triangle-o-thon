let triangleMeasurements = document.querySelectorAll('.triangle-measurement');
let submitBtn = document.querySelector('.submit-btn');
let output = document.querySelector('.output');

function validInputs(base, height) {
    if(base && height) return true;
    return false;
}

function calculateArea() {
    let base = Number(triangleMeasurements[0].value);
    let height = Number(triangleMeasurements[1].value);
    if(validInputs(base, height)) {
        let areaOfTriangle = 1/2 * base * height;
        output.innerText = `Area Calculated : ${areaOfTriangle} cm2`;
    } else {
        output.innerText = `Enter Valid Input Please!`;
    }
}

//Event listeners

submitBtn.addEventListener('click',calculateArea);