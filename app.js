
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


function initOperator(firstInput, secondInput, result, button, calc) {
    const firstNum = document.getElementById(firstInput); 
    const secondNum = document.getElementById(secondInput);
    const doMath = document.getElementById(button);
    const ans = document.getElementById(result);
    
    
    doMath.addEventListener('click', () =>{
        ans.value = calc(Number(firstNum.value), Number(secondNum.value));
    });
}
    

initOperator('firstNumber', 'secondNumber', 'doMath', 'sum', add);
//initOperator('firstNumberB', 'secondNumberB', 'ans', 'doMath', subtract);
//initOperator('firstNumberC', 'secondNumberC', 'ans', 'doMath', multiply);
//initOperator('firstNumberD', 'secondNumberD', 'ans', 'doMath', divide);



//doMath.addEventListener('click', () =>{
  //  answer2.textContent = subtract(Number(firstNumberB.value), Number(secondNumberB.value));
//});
//doMath.addEventListener('click', () =>{
  //  answer3.textContent = multiply(Number(firstNumberC.value), Number(secondNumberC.value));
//});
//doMath.addEventListener('click', () =>{
  //  answer4.textContent = divide(Number(firstNumberD.value) , Number(secondNumberD.value));
//});