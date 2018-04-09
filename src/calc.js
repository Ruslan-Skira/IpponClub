class Calculator {
  constructor() {

    this.plus = {
        sign: '+',
        prioritize: 2,
        plus: function (arg1, arg2) {
        return arg1 + arg2;
        }
    };
    this.minus = {
        sign: '-',
        prioritize: 2,
        minus: function (arg1, arg2){
          return arg1 - arg2;
        },
    };
    this.multiply = {
      sign: '*',
        prioritize: 1,
        multiply: function(arg1, arg2) {
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
      operators: [],
      operands: []
    };
    this.currentOperand = "";
  }

  parsingInput(string) {
    for (let i = 0; i < string.length; i++) {
      const currentCharacter = string[i];
      if (this.isCharacterNumber(currentCharacter)) {
        // TODO: write function "isCharacterNumber" to parse number from the string considering decimal
        this.currentOperand += currentCharacter;
      } else if (this.currentOperand) {
        this.parsed.operands.push(this.currentOperand);
        this.currentOperand = "";
      }
      if (this.isCharacterOperator(currentCharacter)) {
        this.calculateAvailable(); // TODO: make proper calculation
        this.parsed.operators.push(currentCharacter);
      } else if (i + 1 === string.length) {
        // Last character in the string
        this.parsed.operands.push(this.currentOperand);
        this.currentOperand = "";
        this.calculateAvailable();
        // TODO: Show error
      }
    }
  }

  calculate(string) {
    this.parsingInput(string);
    return this.parsed.operands.pop();
  }

  runCalculation(arg1, arg2, operator) {
    if (operator === this.operatorsList[0]) {
      return this.plus.plus(arg1, arg2);
    } else if (operator === this.operatorsList[1]) {
      return this.minus.minus(arg1, arg2);
    } else if (operator === this.operatorsList[2]) {
      return this.multiply.multiply(arg1, arg2);
    } else if (operator === this.operatorsList[3]) {
      return this.divide.divide(arg1, arg2);
    } else {
      // ToDo: call function for each operator. Describe this function in operators array for each operator - this.operatorsList[operator].run(...args)
      console.log("try to treat me?");
    }
  }

  isCharacterNumber(char) {
    return char === "." || "0123456789".indexOf(char) !== -1;
  }

  isCharacterOperator(char) {
    return this.operatorsList.indexOf(char) !== -1;
  }

  calculateAvailable() {
    if (this.parsed.operators.length && this.parsed.operands.length > 1) {
      const result = this.runCalculation(
        +this.parsed.operands.shift(),
        +this.parsed.operands.shift(),
        this.parsed.operators.shift()
      );
      this.parsed.operands.push(result);
    }
  }
  // TODO: create method or change already created to counting right 2*2+2, * should be first.
}

const calculator = new Calculator();

console.log(calculator.calculate("1 + 2"));

// *** Tests ***

function TestCalc() {}

TestCalc.prototype.equals = function(result, expected, description) {
  if (result === expected) {
    console.log("passed - " + description);
  } else {
    console.log(
      "FAILED - " +
        description +
        " - result = " +
        result +
        ", expect = " +
        expected
    );
  }
};
const calcForTest = new Calculator();
const test = new TestCalc();
test.equals(calcForTest.calculate("13 + 4"), 17, "1 Sum integers");
test.equals(calcForTest.calculate("13 - 23"), -10, "2 Subtract integers");
test.equals(calcForTest.calculate("10 * 4"), 40, "3 Multiply integers");
test.equals(calcForTest.calculate("24 / 12"), 2, "4 Divide integers");
test.equals(calcForTest.calculate("3.1 + 4.2"), 7.3, "5 Sum for decimals");
test.equals(calcForTest.calculate("22.5 / 1.5"), 15, "6 Divide decimals");
test.equals(calcForTest.calculate("1.1 * 2.2"), 2.42, "7 Multiply decimals");
test.equals(calcForTest.calculate("1 + 2 + 3"), 6, "8 3 operands in line");
test.equals(
  calcForTest.calculate("2 + 2 * 2"),
  6,
  "9 procedure of calculating"
);
test.equals(
  calcForTest.calculate("2 * 2 + 2"),
  6,
  "10 procedure of calculating * is first"
);

// *** Unit tests ***

const calcForUnitTests = new Calculator();
// Test function isCharacterNumber
test.equals(calcForUnitTests.isCharacterNumber("3"), true, "11 Is a number");
test.equals(calcForUnitTests.isCharacterNumber("0"), true, "12 Is a number");
test.equals(
  calcForUnitTests.isCharacterNumber("."),
  true,
  "13 Is part of the number"
);

test.equals(
  calcForUnitTests.isCharacterNumber("+"),
  false,
  "14 Is part of the number"
);
test.equals(
  calcForUnitTests.isCharacterNumber("a"),
  false,
  "15 Is part of the number"
);

//Test function isCharacterOperator
test.equals(
  calcForUnitTests.isCharacterOperator("+"),
  true,
  " 16 + is one of the operators"
);
test.equals(
  calcForUnitTests.isCharacterOperator("-"),
  true,
  "17 - is one of the operators"
);
test.equals(
  calcForUnitTests.isCharacterOperator("*"),
  true,
  "18 * is one of the operators"
);
test.equals(
  calcForUnitTests.isCharacterOperator("/"),
  true,
  "19 / is one of the operators"
);

test.equals(
  calcForUnitTests.isCharacterOperator("3"),
  false,
  "20 3 is not an operator"
);
test.equals(
  calcForUnitTests.isCharacterOperator("0"),
  false,
  "0 is not an operator"
);
test.equals(
  calcForUnitTests.isCharacterOperator("m"),
  false,
  "m is not an operator"
);

//Test function runCalculation
test.equals(
  calcForUnitTests.runCalculation(2, 14, "/"),
  7,
  "Check runCalculation for divide"
);

// TODO: finish testing runCalculation

// *** End Unit tests ***
