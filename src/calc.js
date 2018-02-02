class Calculator {
    constructor(){};

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

console.log(counting.calculate(10,5,'/'));

var indexCalculator={};
var str = prompt('fill up 1+2');

var operators = " '+', '-', '/', '*' "; //create array as class property on init this.operators: ['+','-','/','*']
for(var i = 0; i<operators.length; i++){ // make this as method of class Calculator to be able to use it inside
    var ind = str.indexOf(operators[i]);

    if(str[ind]){   //check if this.operators.indexOf(str[i]);
        indexCalculator.arg1 = str[ind-1];
        indexCalculator.arg2 = str[ind+1];
        indexCalculator.operator = str[ind];
    }
    else { // else - this is not operator. So add it to the numbers array. this.numbers...
        console.log('in progress');
    }
}
alert(indexCalculator.operator);










//Unit test

function TestCalc () {};

TestCalc.prototype.equals = function (output, answer, wrongAnsw) {
    if (output === answer) {
        console.log('OK');
    } else {
        console.log(wrongAnsw);
    };
};
const calcForTest = new Calculator()
const test = new TestCalc();
const testCalc1 = test.equals(calcForTest.calculate(5, 3, '-'), 2, 'hoho');

console.log(testCalc1); //why it is undefined
