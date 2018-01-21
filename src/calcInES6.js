class Calculator {
    constructor(){}

    calculate(arg1, arg2, operator) {
        if (operator === '+') {
            return( arg1 + arg2 );
        }
        else if (operator == '-' ) {
            return(arg1 - arg2);
        }
        else if ( operator == '*') {
            return(arg1 * arg2);
        }
        else if (operator == '/') {
            return(arg1 / arg2);
        }
        else {
            console.log('DIch?');
        };
    }
}

const counting = new Calculator();

console.log(counting.calculate(1,2,'+'));
console.log(counting.calculate(10,5,'/'));
//Unit test

function TestCalc () {};

TestCalc.prototype.equals = function (output, answer, wrongAnsw) {
    if (output === answer) {
        console.log('OK');
    } else {
        console.log(wrongAnsw);
    };
};
const calcForTest = new Calculator();
const test = new TestCalc();
const testCalc1 = test.equals(calcForTest.calculate(5, 3, '-'), 2, 'hoho');

console.log(testCalc1); //why it is undefined
