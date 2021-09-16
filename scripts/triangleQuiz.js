let form = document.querySelector("#form");
let submitBtn = document.querySelector('.submit-btn');
let output = document.querySelector('.output');
let answerArray = ['5', 'obtuse'];

function calculateScore(event) {
    event.preventDefault();
    let score = 0;
    let index = 0;
    let formData = new FormData(form);
    for(let pair of formData.values()) {
        if(pair === answerArray[index]) score++;
        index++;
    }
    output.innerText = `Your score is: ${score}`;
}

//Event listeners

form.addEventListener('submit', calculateScore);