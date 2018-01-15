// In prototype form

//var firstN = +prompt('first argument');
//var secondN = +prompt('second argument');
//var operator = prompt('first argument');

//console.log(firstN +operator+ secondN);// counting not right I am trying understend how it works

function Calculator () {

}

Calculator.prototype.calculate = function (arg1, arg2, operator) {
    if (operator === '+') {
        console.log( arg1 + arg2 );
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

function TestCalc () {

};
TestCalc.prototype.equals = function (output, answer, wrongAnsw) {
    if (output === answer) { // undefinde output and answer
        console.log('OK');
    } else {
        console.log(wrongAnsw);
    };
};

const test = new TestCalc();
const calcForTest = new Calculator();
test.equals();



//checkMyCalc1.check(myCalc1.calculate(), 13, 'Calculate wrong addition' );
//myCalc1.calculate(4, 5, '+')







