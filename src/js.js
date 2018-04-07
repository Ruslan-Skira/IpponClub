
class Calculator {
        constructor() {
            this.plus = {
                sign: '+',
                prioritize: 2,
                plus: function (arg1, arg2) {
                    return arg1 + arg2;
                },
            };
            this.minus = {
                sign: '-',
                prioritize: 2,
                minus: function (arg1, arg2) {
                    return arg1 - arg2;
                },
            };

            this.multiply = {
                sign: '*',
                prioritize: 1,
                multiply: function (arg1, arg2) {
                    return arg1 * arg2;
                },
            };

            this.divide = {
                sign: '/',
                prioritize: 1,
                divide: function (arg1, arg2) {
                    return arg1 / arg2;
                }
            };

        this.operatorsList = [this.plus.sign, this.minus.sign, this.multiply.sign, this.divide.sign];
        this.parsed = {
            operands: [],
            operators: []
        };
        this.currentOperand = '';


    }
    calculate(string){
            this.parsingInput(string);
            return this.parsed.operands.pop();
    }


    parsingInput(string){
        for(let i = 0; i <  string.length; i ++){
            const currentCharacter = string[i];
            if (this.isCharacterNumber(currentCharacter)){
                this.currentOperand += currentCharacter;
            } else if(this.currentOperand){
                this.parsed.operands.push(this.currentOperand);
                this.currentOperand = '';
            }
            if(this.isCharacterOperator(currentCharacter)){
                this.parsed.operators.push(currentCharacter);
                this.calculateAvailable();



            }else if(i + 1 === string.length){
                this.parsed.operands.push(currentCharacter);
                this.calculateAvailable();
                this.currentOperand = '';


            }
        }
    }


    isCharacterNumber(char){
        return char === '.'|| '0123456789'.indexOf(char) !==-1;
    };
    isCharacterOperator(char){
        return this.operatorsList.indexOf(char) !==-1;
    };
    calculateAvailable(){
        if(this.parsed.operators.length && this.parsed.operands.length > 1){
            const result = this.runCalculation(+this.parsed.operands.shift(), +this.parsed.operands.shift(), this.parsed.operators.shift());
            return this.parsed.operands.push(result);
        }
    };
    runCalculation(arg1, arg2, operator){
        if(operator === this.operatorsList[0]){
            return this.plus.plus(arg1, arg2);
        }

    };



    }




let calculator = new Calculator();





console.log(calculator.calculate('1 + 2'));
console.log(calculator.operatorsList);
//console.log(calculator.plus.plus(1,2));




