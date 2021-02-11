// grab DOM elements
const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const firstNumberB = document.getElementById('first-number-b');
const secondNumberB = document.getElementById('second-number-b');
const firstNumberC = document.getElementById('first-number-c');
const secondNumberC = document.getElementById('second-number-c');
const firstNumberD = document.getElementById('first-number-d');
const secondNumberD = document.getElementById('second-number-d');



const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');
const doMath = document.getElementById('button');

doMath.addEventListener('click', () =>{
    answer1.textContent = Number(firstNumber.value) + Number(secondNumber.value);

});
doMath.addEventListener('click', () =>{
    answer2.textContent = Number(firstNumberB.value) - Number(secondNumberB.value);
});
doMath.addEventListener('click', () =>{
    answer3.textContent = Number(firstNumberC.value) * Number(secondNumberC.value);
});
doMath.addEventListener('click', () =>{
    answer4.textContent = Number(firstNumberD.value) / Number(secondNumberD.value);
});

function add(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber,secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber,secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber,secondNumber) {
    return firstNumber / secondNumber;
}

