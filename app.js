
import { add, subtract, multiply, divide } from './utilities.js';


//const firstNumberB = document.getElementById('first-number-b');
//const secondNumberB = document.getElementById('second-number-b');
//const firstNumberC = document.getElementById('first-number-c');
//const secondNumberC = document.getElementById('second-number-c');
//const firstNumberD = document.getElementById('first-number-d');
//const secondNumberD = document.getElementById('second-number-d');



//const answer2 = document.getElementById('answer-2');
//const answer3 = document.getElementById('answer-3');
//const answer4 = document.getElementById('answer-4');


function initOperator(firstNumber, secondNumber, result, button, calc) {
    const firstNum = document.getElementById(firstNumber); 
    const secondNum = document.getElementById(secondNumber);
    const doMath = document.getElementById(button);
    const answer = document.getElementById(result);
    
    
    doMath.addEventListener('click', () =>{
        answer.textContent = calc(Number(firstNum.value), Number(secondNum.value));
    });
}
    

initOperator('firstNumber', 'secondNumber', 'sum', 'button', add);
initOperator('firstNumberB', 'secondNumberB', 'difference', 'button', subtract);
initOperator('firstNumberC', 'secondNumberC', 'product', 'button', multiply);
initOperator('firstNumberD', 'secondNumberD', 'quotient', 'button', divide);



//doMath.addEventListener('click', () =>{
  //  answer2.textContent = subtract(Number(firstNumberB.value), Number(secondNumberB.value));
//});
//doMath.addEventListener('click', () =>{
  //  answer3.textContent = multiply(Number(firstNumberC.value), Number(secondNumberC.value));
//});
//doMath.addEventListener('click', () =>{
  //  answer4.textContent = divide(Number(firstNumberD.value) , Number(secondNumberD.value));
//});