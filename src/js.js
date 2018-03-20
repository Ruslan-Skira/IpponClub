class Calculator {
    constructor() {
        this.operatorsList = ['+', '-', '/', '*'];
        this.parsed = {
            operators: [],
            operands: [],
        }
        this.currentOperand = '';
        this.result = null;





    }

    calculate(string){
        this.parsingInput(string);
        return this.parsed.operands.pop();

    };

    parsingInput(string) {
        for(let i = 0; i < string.length; i++){
            const currentCharacter = string[i];
            if(this.isCharacterNumber(currentCharacter)){
                this.currentOperand += currentCharacter;
            } else if (this.currentOperand) {
                this.parsed.operands.push(this.currentOperand);
                this.currentOperand = '';
            }
            if (this.isCharacterOperator(currentCharacter)) {
                this.parsed.operators.push(currentCharacter);
                this.calculateAvailable();

            } else if (i + 1 === string.length) {
                this.parsed.operands.push(this.currentOperand);
                this.currentOperand = '';
                this.calculateAvailable();
            };
        }
    }
    isCharacterNumber(char) {
        return char === '.' || '0123456789'.indexOf(char) !== -1;
    }

    isCharacterOperator(char){
        return this.operatorsList.indexOf(char) !== -1;
    }
    calculateAvailable(){
        if (this.parsed.operators.length && this.parsed.operands.length > 1) {
            const result = this.runCalculation(+this.parsed.operands.pop(), +this.parsed.operands.pop(), this.parsed.operators.pop());
            this.parsed.operands.push(result);
        }
    }

    runCalculation(arg2, arg1, operator){
        if (operator === this.operatorsList[0]) {
            let plus = arg1 + arg2;
            return plus.toFixed(1);
        }
        else if (operator === this.operatorsList[])
        else {
            alert('try to treat me?');
        }
    };
}











var calculate = new Calculator();

console.log(calculate.calculate('2.3 + 1'));

//unit test pseudo cod
// testCalc(2.3 +);