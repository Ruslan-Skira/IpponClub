class Calculator {
    constructor(){
        this.operatorsList = ['+', '-', '*', '/'];
        this.parsed = {
          operators: [],
          operands: [],
        }
        this.currentOperand = '';
        this.result = null;
    };

    parsingInput (string) {
      for(let i = 0; i < string.length; i++){
        const currentCharacter = string[i];
        if(this.isCharacterNumber(currentCharacter)) { // TODO: write function "isCharacterNumber" to parse number from the string considering decimal
          this.currentOperand += currentCharacter;
        } else if (this.currentOperand) {
          this.parsed.operands.push(this.currentOperand);
          this.currentOperand = '';
        } 
        if (this.isCharacterOperator(currentCharacter)) {
          this.parsed.operators.push(currentCharacter);
          this.calculateAvailable();  // TODO: make proper calculation
        } else if (i + 1 === string.length){ // Last character in the string
          this.parsed.operands.push(this.currentOperand);
          this.currentOperand = '';
          this.calculateAvailable();
          // TODO: Show error
        }
      }
    }

    calculate (string) {
        this.parsingInput(string);
        return this.parsed.operands.pop();
    };

    runCalculation (arg2, arg1, operator) {
      if (operator === this.operatorsList[0]) {
          return arg1 + arg2;
      }
      else if (operator === this.operatorsList[1]) {
          return arg1 - arg2;
      }
      else if (operator == this.operatorsList[2]) {
          return arg1 * arg2;
      }
      else if (operator == this.operatorsList[3]) {
          return arg1 / arg2;
      }

      // ToDo: call function for each operator. Descride this function in operators array for each operator - this.operatorsList[operator].run(...args)
      else {
          console.log('try to treat me?');
      }
    }

    isCharacterNumber (char) {
      return char === '.' || '0123456789'.indexOf(char) !== -1;
    }

    isCharacterOperator(char) {
      return this.operatorsList.indexOf(char) !== -1;
    }

    calculateAvailable () {
      if (this.parsed.operators.length && this.parsed.operands.length > 1) {
        const result = this.runCalculation(+this.parsed.operands.pop(), +this.parsed.operands.pop(), this.parsed.operators.pop());
        this.parsed.operands.push(result);
      }
    }
}

const calculator = new Calculator();


console.log(calculator.calculate('1 + 2'));



// *** Tests ***

function TestCalc () {};

TestCalc.prototype.equals = function (result, expected, description) {
    if (result === expected) {
        console.log('passed - ' + description);
    } else {
        console.log('FAILED - ' + description + ' - result = ' + result + ', expect = ' + expected);
    };
};
const calcForTest = new Calculator();
const test = new TestCalc();
test.equals(calcForTest.calculate('13 + 4'), 17, 'Sum integers');
test.equals(calcForTest.calculate('13 - 23'), -10, 'Subtract integers');
test.equals(calcForTest.calculate('10 * 4'), 40, 'Multiply integers');
test.equals(calcForTest.calculate('24 / 12'), 2, 'Divide integers');
test.equals(calcForTest.calculate('3.1 + 4.2'), 7.3, 'Sum for decimals');
test.equals(calcForTest.calculate('22.5 / 1.5'), 15, 'Divide decimals');
test.equals(calcForTest.calculate('1.1 * 2.2'), 2.42, 'Multiply decimals');
test.equals(calcForTest.calculate('1 + 2 + 3'), 6, '3 operands in line');
test.equals(calcForTest.calculate('2 + 2 * 2'), 6, 'procedure of calculating');


// *** Unit tests ***

const calcForUnitTests = new Calculator();
// Test function isCharacterNumber
test.equals(calcForUnitTests.isCharacterNumber('3'), true, 'Is a number');
test.equals(calcForUnitTests.isCharacterNumber('0'), true, 'Is a number');
test.equals(calcForUnitTests.isCharacterNumber('.'), true, 'Is part of the number');

test.equals(calcForUnitTests.isCharacterNumber('+'), false, 'Is part of the number');
test.equals(calcForUnitTests.isCharacterNumber('a'), false, 'Is part of the number');

//Test function isCharacterOperator
test.equals(calcForUnitTests.isCharacterOperator('+'), true, '+ is one of the operators');
test.equals(calcForUnitTests.isCharacterOperator('-'), true, '- is one of the operators');
test.equals(calcForUnitTests.isCharacterOperator('*'), true, '* is one of the operators');
test.equals(calcForUnitTests.isCharacterOperator('/'), true, '/ is one of the operators');

test.equals(calcForUnitTests.isCharacterOperator('3'), false, '3 is not an operator');
test.equals(calcForUnitTests.isCharacterOperator('0'), false, '0 is not an operator');
test.equals(calcForUnitTests.isCharacterOperator('m'), false, 'm is not an operator');

//Test function runCalculation
test.equals(calcForUnitTests.runCalculation(2, 14, '/'), 7, 'Check runCalculation for divide');

// TODO: finish testing runCalculation

// *** End Unit tests ***