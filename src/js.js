class Calculator{
    constructor(){
        this.operatorsList = ['+', '-', '*', '/'];
        this.parsed = {
            operators: [],
            operands: [],
        }
        this.currentOperand = '';
    }
    calculate(string){
        this.parsingInput(string);
        return this.parsed.operands.pop();
    }

    parsingInput(string){
        for (let i = 0; i < string.length; i++){
            const currentCharacter = string[i];
            if(this.isCharacterNumber(currentCharacter)){ //TODO: check if it's number or not
                this.currentOperand += currentCharacter;
            } else if(this.currentOperand){
                this.parsed.operands.push(this.currentOperand);
                this.currentOperand = '';
            }

            if(this.isCharacterOperator(currentCharacter)){ // TODO: check if it's operator or not
                this.parsed.operators.push(currentCharacter);
                this.calculateAvailable(); //TODO: make proper calculation
            } else if( i + 1 === string.length){
                this.parsed.operands.push(this.currentOperand);
                this.currentOperand = '';
                this.calculateAvailable();
            }
        }
    }
    isCharacterNumber(char) {
        return char === '.'||'0123456789'.indexOf(char) !==-1;
    }
    isCharacterOperator(char){
        return this.operatorsList.indexOf(char) !==-1;
    };
    calculateAvailable(){
        if (this.parsed.operators.length && this.parsed.operands.length > 1) {
            const result = this.runCalculation(+this.parsed.operands.shift(), +this.parsed.operands.shift(), this.parsed.operators.shift());
            this.parsed.operands.push(result);
        }

    }
    runCalculation(arg1, arg2, operator){
        if (operator === this.operatorsList[0]){
           return arg1 + arg2;
        } else if (operator === this.operatorsList[1]){
           return arg1 - arg2;
        } else if (operator === this.operatorsList[2]){
            return arg1 * arg2;
        } else if (operator === this.operatorsList[3]){
            return arg1 / arg2;
        } else {
            console.log('it is not from operatorsList')
        }
    }
}


const calculator = new Calculator();
console.log(calculator.calculate('1 + 2'));

//*** Unit test ***

function TestCalculator () {};
TestCalculator.prototype.equals = function (result, expected, description){
    if(result === expected){
        console.log('passed -' + description);
    } else {
        console.log('FAILED-' + 'resuls=' + result + 'expected' + expected + description);
    }
}
const CalcForTest = new Calculator();
const test = new TestCalculator();

test.equals(CalcForTest.calculate('2 * 2 + 2'), 6, 'counting right');
