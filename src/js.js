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
        return this.parsed.operators.pop();
    }

    parsingInput(string){
        for (let i = 0; i < string.length; i++){
            const currentCharacter = string[i];
            if(this.isCharacterNumber(currentCharacter)){
                this.currentOperand += currentCharacter;
            } else if(this.currentOperand){
                this.parsed.operands.push();
                this.currentOperand = '';
            }

            if(this.isCharacterOperator(currentCharacter)){


            }

        }

    }
}





let calculator = new Calculator();
console.log(calculator.calculate('1 + 2'));