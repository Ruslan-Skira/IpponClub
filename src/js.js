


function Calc (arg1,arg2, operator) {

    if (operator === '+') {
        return arg1 + arg2;
    }
    else if (operator === '-') {
        return arg1 - arg2;
    }
    else if (operator == '*') {
        return arg1 * arg2;
    }
    else if (operator == '/') {
        return arg1 / arg2;
    }
    else {
        console.log('try to treat me?');
    }
};

var countPlease = Calc(4 , 2, '/');
console.log(countPlease);

function equals(whatCompare, whatShouldBe) {
    if (whatCompare == whatShouldBe) {
        console.log('you are right');
    }
    else{
        console.log('Do you try to treat me? ');
    }
};
equals(Calc(4 , 2, '/'), 1);
// class in functional style
//I wrote it with constructor
function Calculator (arg1, arg2, operator) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.operator = operator;

    this.calculate = function (arg1, arg2, operator) {
        if (operator == '+') {
            return arg1 + arg2;
        }
        else if (operator == '-') {
            return arg1 - arg2;
        }
        else if (operator == '*') {
            return arg1 * arg2;
        }
        else if (operator == '/') {
            return arg1 / arg2;
        }
        else {
            console.log('NoNoNo');
        };
    };
};

var myCalk1 = new Calculator();
myCalk1.calculate(5, 3, '-');

var myCalk2 = new Calculator();
myCalk2.calculate(3, 5, '*');

function TestCalc (output, answer) {
    this.output = output;
    this.answer = answer;
    this.check = function(){
        if (output == answer) {
            console.log('Ok');
        } else {
            'something not ok'};
    };

};



var checkMyCalk = new TestCalc();
checkMyCalk.check(myCalk.calculate(5, 3, '-'), 2);

// In prototype







