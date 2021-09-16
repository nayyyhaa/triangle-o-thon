let triangleAngles = document.querySelectorAll('.triangle-angle');
let submitBtn = document.querySelector('.submit-btn');
let output = document.querySelector('.output');

function validInputs(angle1, angle2, angle3) {
    if(angle1 && angle2 && angle3) return true;
    return false;
}

function sumOfAngles(angle1, angle2, angle3) {
    return angle1 + angle2 + angle3;
}

function validateTriangle() {
    let angle1 = Number(triangleAngles[0].value);
    let angle2 = Number(triangleAngles[1].value);
    let angle3 = Number(triangleAngles[2].value);
    if(validInputs(angle1, angle2, angle3)) {
        let sum = sumOfAngles(angle1, angle2, angle3)
        if(sum === 180) output.innerText = "YAY! It's a triangle";
        else output.innerText = "It's not a triangle";
    } else {
        output.innerText = `Enter Valid Input Please!`;
    }
}

//Event listeners

submitBtn.addEventListener('click',validateTriangle);