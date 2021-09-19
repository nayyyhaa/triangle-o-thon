let triangleSides = document.querySelectorAll('.triangle-side');
let submitBtn = document.querySelector('.submit-btn');
let output = document.querySelector('.output');

function validInputs(side1, side2) {
    if(side1 && side2 && side1>0 && side2>0) return true;
    return false;
}

function sumOfSquaresOfSides(side1, side2) {
    return side1*side1 + side2*side2;
}

function calculateHypotenuse() {
    let side1 = Number(triangleSides[0].value);
    let side2 = Number(triangleSides[1].value);
    if(validInputs(side1, side2)) {
        let sumOfSquares = sumOfSquaresOfSides(side1, side2);
        let hypotenuse = parseFloat(Math.sqrt(sumOfSquares)).toFixed(2);
        output.innerText = `Hypotenuse Calculated : ${hypotenuse} cm`;
    } else {
        output.innerText = `Enter Valid Input Please!`;
    }
}

//Event listeners

submitBtn.addEventListener('click',calculateHypotenuse);