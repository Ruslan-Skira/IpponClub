// In prototype form

var firstN = prompt('first argument');
var secondN = prompt('first argument');
var operator = prompt('first argument');

console.log(+firstN +operator+ +secondN);// counting not right I am trying understend how it works

function Calculator (arg1, arg2, operator) {
    this._arg1 = arg1;
    this._arg2 = arg2;
    this._operator = operator;
}

Calculator.prototype._calculate = function () {
    if (this._operator === '+') {
        return( this._arg1 + this._arg2 );
    }
    else if (this._operator == '-' ) {
        return(this._arg1 - this._arg2);
    }
    else if ( this._operator == '*') {
        return(this._arg1 * this._arg2);
    }
    else if (this._operator == '/') {
        return(this._arg1 /this._arg2);
    }
    else {
        console.log('DIch?')
    };
};
var myCalc1 = new Calculator(4, 9, '+');
myCalc1._calculate();


//Unit test
function TestCalc ( output, answer ) {
    this._output = output;
    this._answer = answer;
};
TestCalc.prototype.check = function () {
    if (this._output === this._answer) {
        console.log('OK');
    } else {
        console.log('dich prodolgaetsa?');
    };
};

var checkMyCalc1 = new TestCalc(myCalc1._calculate(), 13 );
checkMyCalc1.check();
//myCalc1.calculate(4, 5, '+')







