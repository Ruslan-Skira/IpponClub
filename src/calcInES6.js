class Calculator {
    constructor(){
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.operator = arg1;
    }

    splitArg(arg){
        var splited = arg.split('');


            if(splited[2] == '+'){
                splited[0] = this.arg1;
                splited[1] = this.arg2;
                splited[2] = this.operator;
            }
            else if(splited[2] == '-'){
                splited[0] = arg1;
                splited[1] = arg2;
                splited[2] = operator;
            }
            else if(splited[2] == '/'){
                splited[0] = arg1;
                splited[1] = arg2;
                splited[2] = operator;
            }
            else if(splited[2] == '*'){
                splited[0] = arg1;
                splited[1] = arg2;
                splited[2] = operator;
            }
            else {
                console.log('wtf');
            }

            return this.calculate(this.arg1, this.arg2, this.operator);

    }

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

console.log(counting.splitArg('12+'));
//console.log(counting.calculate(10,5,'/'));
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
