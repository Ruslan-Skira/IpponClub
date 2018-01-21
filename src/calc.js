function Calculator () {}

Calculator.prototype.calculate = function (arg1, arg2, operator) {
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
};
var myCalc = new Calculator();
const answer = myCalc.calculate(6, 2, '+');
console.log(answer);


const answer2 = myCalc.calculate(3, 2,'/');
console.log(answer2);


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



//checkMyCalc1.check(myCalc1.calculate(), 13, 'Calculate wrong addition' );
//myCalc1.calculate(4, 5, '+')







