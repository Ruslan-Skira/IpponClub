class Calculator {
    constructor(){
        this.operators = ['+', '-', '/', '*'];
        this.numbers = [];//hz;
    };


    calculate() {
        for(var i = 0; i < this.operators.length; i++){
            var arr = this.operators[i];
            var ind = str.indexOf(arr);

            if(str[ind] == '+'){
                var answer = +str[ind-1] + +str[ind+1];
                console.log(answer);


            }
            else {
                this.numbers.push(str[i]);
            }
        }
    }
}

const counting = new Calculator();

var str = prompt('fill up 1+2');
console.log(counting.calculate());
//console.log(counting.numbers[1]);
//console.log(counting.numbers[2]);
//console.log(counting.numbers[3]);



//Unit test

/*function TestCalc () {};

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

console.log(testCalc1); //why it is undefined*/
