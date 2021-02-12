// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, fahrenheit, subtract, multiply, divide } from '../utilities.js';

const test = QUnit.test;





test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // ADD
    //const x = 4;
    //const y = 2;
    //const sum = 6;

    // SUBTRACT
    //const x = 4;
    //const y = 2;
    //const sum = 2;

    // MULTIPLY
    //const x = 4;
    //const y = 2;
    //const sum = 8;

    // DIVIDE
    //const x = 4;
    //const y = 2;
    //const sum = 2;
    
    // CELSIUS
    const celsius = 25;
    const degrees = 77;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    //const result = add(x, y);
    //const result = subtract(x, y);
    //const result = mulitply(x, y);
    //const result = divide(x, y);
    const result = fahrenheit(celsius);

    //Expect
    // Make assertions about what is expected versus the actual result
    //expect.equal(result, sum);
    expect.equal(result, degrees);
});
