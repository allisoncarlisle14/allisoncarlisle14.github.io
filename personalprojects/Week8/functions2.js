const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "*", "/"];

let expression = "";
let field = "";

const pushButton = (fieldFunc, expressionFunc, input) => {
  if (fieldFunc === functions.clearField) {
    field = fieldFunc(input);
    expression = expressionFunc(input);
    updateField(field);
  } else {
    field += fieldFunc(input);
    expression += expressionFunc(input);
    if (functions.LeftParensMatchRightParens()) {
        if (!document.getElementById("closed").classList.contains("Opaque")) {
            document.getElementById("closed").classList.add("Opaque");
            document.getElementById("closed").classList.remove("Ready");
        }
    }
    if (expression!== "") {
        if (document.getElementById("clear").classList.contains("Opaque")) {
            document.getElementById("clear").classList.remove("Opaque");
            document.getElementById("clear").classList.add("Ready");
        }
        if (functions.LeftParensMatchRightParens()) {
            if (document.getElementById("equals").classList.contains("Opaque")) {
                document.getElementById("equals").classList.remove("Opaque");
                document.getElementById("equals").classList.add("Ready");
            }
        } else {
            if (!document.getElementById("equals").classList.contains("Opaque")) {
                document.getElementById("equals").classList.add("Opaque");
                document.getElementById("equals").classList.remove("Ready");
            }
        }
    }
    if (field !== "") {
      updateField(field);
    }
  }
};

const functions = {
  setExpressionForTest: (input) => {
    expression = input;
  },

  LeftParensMatchRightParens: () => {
    let leftParenCounter = 0;
    let rightParenCounter = 0;
    for (let char of expression) {
        if (char === '(') {
            leftParenCounter ++;
        }
        if (char === ')') {
            rightParenCounter ++;
        }
    }
    if (rightParenCounter === leftParenCounter) {
        return true;
    } else {
        return false;
    }
    
  },

  enterNumberIntoField: (number) => {
    for (let operator in operators) {
        if (document.getElementById(operators[operator]).classList.contains("Opaque")) {
            document.getElementById(operators[operator]).classList.remove("Opaque");
            document.getElementById(operators[operator]).classList.add("Ready");
            }
        }
        if (!document.getElementById("neg").classList.contains("Opaque")) {
            document.getElementById("neg").classList.add("Opaque");
            document.getElementById("neg").classList.remove("Ready");
            }
        if (!functions.LeftParensMatchRightParens()) {
            if (document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.remove("Opaque");
                document.getElementById("closed").classList.add("Ready");
            }
        }
        if (document.getElementById("^").classList.contains("Opaque")) {
            document.getElementById("^").classList.remove("Opaque");
            document.getElementById("^").classList.add("Ready");
        }
        
    return number;
  },

  enterNumberIntoExpression: (number) => {
    if (expression.charAt(expression.length - 1) === ")") {
      return "*" + number;
    } else {
      return number;
    }
  },

  enterOperatorIntoField: (operator) => {
    if (
      expression !== "" &&
      (expression.charAt(expression.length - 1) === ")" ||
        expression.charAt(expression.length - 1) === "." ||
        digits.includes(Number(expression.charAt(expression.length - 1))))
    ) {
        for (let operator in operators) {
            if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
                document.getElementById(operators[operator]).classList.add("Opaque");
                document.getElementById(operators[operator]).classList.remove("Ready");
                }
            }
            if (document.getElementById("neg").classList.contains("Opaque")) {
                document.getElementById("neg").classList.remove("Opaque");
                document.getElementById("neg").classList.add("Ready");
                }
            if (!document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.add("Opaque");
                document.getElementById("closed").classList.remove("Ready");
                }
                if (!document.getElementById("^").classList.contains("Opaque")) {
                    document.getElementById("^").classList.add("Opaque");
                    document.getElementById("^").classList.remove("Ready");
                }
      return operator;
    } else {
      return "";
    }
  },

  enterOperatorIntoExpression: (operator) => {
    if (
      expression !== "" &&
      (expression.charAt(expression.length - 1) === ")" ||
        expression.charAt(expression.length - 1) === "." ||
        digits.includes(Number(expression.charAt(expression.length - 1))))
    ) {
      return operator;
    } else {
      return "";
    }
  },

  negateValueInField: (input) => {
    if (
      expression === "" ||
      expression.charAt(expression.length - 1) === "(" ||
      expression.charAt(expression.length - 1) === "+" ||
      expression.charAt(expression.length - 1) === "*" ||
      expression.charAt(expression.length - 1) === "/"
    ) {
        if (!document.getElementById("closed").classList.contains("Opaque")) {
            document.getElementById("closed").classList.add("Opaque");
            document.getElementById("closed").classList.remove("Ready");
            }
            if (!document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.add("Opaque");
                document.getElementById("^").classList.remove("Ready");
            }
      return input;
    }
    if (expression.charAt(expression.length - 1) === ")") {
        for (let operator in operators) {
            if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
                document.getElementById(operators[operator]).classList.add("Opaque");
                document.getElementById(operators[operator]).classList.remove("Ready");
                }
            }
            if (!document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.add("Opaque");
                document.getElementById("closed").classList.remove("Ready");
                }
                if (!document.getElementById("^").classList.contains("Opaque")) {
                    document.getElementById("^").classList.add("Opaque");
                    document.getElementById("^").classList.remove("Ready");
                }
      return "*(-";
    }
    if (expression.charAt(expression.length - 1) === "-") {
        for (let operator in operators) {
            if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
                document.getElementById(operators[operator]).classList.add("Opaque");
                document.getElementById(operators[operator]).classList.remove("Ready");
                }
            }
            if (!document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.add("Opaque");
                document.getElementById("closed").classList.remove("Ready");
                }
                if (!document.getElementById("^").classList.contains("Opaque")) {
                    document.getElementById("^").classList.add("Opaque");
                    document.getElementById("^").classList.remove("Ready");
                }
      return "(-";
    }
    if (
      expression.charAt(expression.length - 1) === "." ||
      digits.includes(Number(expression.charAt(expression.length - 1)))
    ) {
      return "";
    }
  },

  negateValueInExpression: (input) => {
    if (
      expression === "" ||
      expression.charAt(expression.length - 1) === "(" ||
      expression.charAt(expression.length - 1) === "+" ||
      expression.charAt(expression.length - 1) === "*" ||
      expression.charAt(expression.length - 1) === "/"
    ) {
      return input;
    }
    if (expression.charAt(expression.length - 1) === ")") {
      return "*(-";
    }
    if (expression.charAt(expression.length - 1) === "-") {
      return "(-";
    }
    if (
      expression.charAt(expression.length - 1) === "." ||
      digits.includes(Number(expression.charAt(expression.length - 1)))
    ) {
      return "";
    }
  },
  insertConstantInField: (constant) => {
    // new
    for (let operator in operators) {
        if (document.getElementById(operators[operator]).classList.contains("Opaque")) {
            document.getElementById(operators[operator]).classList.remove("Opaque");
            document.getElementById(operators[operator]).classList.add("Ready");
            }
        }
        if (document.getElementById("neg").classList.contains("Opaque")) {
            document.getElementById("neg").classList.remove("Opaque");
            document.getElementById("neg").classList.add("Ready");
            }
            if (!functions.LeftParensMatchRightParens()) {
                if (document.getElementById("closed").classList.contains("Opaque")) {
                    document.getElementById("closed").classList.remove("Opaque");
                    document.getElementById("closed").classList.add("Ready");
                }
            }
            if (document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.remove("Opaque");
                document.getElementById("^").classList.add("Ready");
            }
    if (constant === 'E') {
    return 'e';
    }
    if (constant === 'PI') {
      return '&#120529';
    }
  },
  insertConstantInExpression: (constant) => {
    if (
      expression !== "" &&
      (expression.charAt(expression.length - 1) === ")" ||
        expression.charAt(expression.length - 1) === "." ||
        digits.includes(Number(expression.charAt(expression.length - 1))))
    ) {
      return "*(Math." + constant + ")";
    } else {
      return "(Math." + constant + ")";
    }
  },
  clearField: (input) => {
    for (let operator in operators) {
        if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
            document.getElementById(operators[operator]).classList.add("Opaque");
            document.getElementById(operators[operator]).classList.remove("Ready");
            }
        }
        console.log('test');
        if (document.getElementById("neg").classList.contains("Opaque")) {
            console.log('test');
            document.getElementById("neg").classList.remove("Opaque");
            document.getElementById("neg").classList.add("Ready");
            }
        if (!document.getElementById("closed").classList.contains("Opaque")) {
            document.getElementById("closed").classList.add("Opaque");
            document.getElementById("closed").classList.remove("Ready");
            }
        if (!document.getElementById("clear").classList.contains("Opaque")) {
            document.getElementById("clear").classList.add("Opaque");
            document.getElementById("clear").classList.remove("Ready");
            }
        if (!document.getElementById("equals").classList.contains("Opaque")) {
            document.getElementById("equals").classList.add("Opaque");
            document.getElementById("equals").classList.remove("Ready");
            }
        if (!document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.add("Opaque");
                document.getElementById("^").classList.remove("Ready");
            }
            if (!document.getElementById("equals").classList.contains("Opaque")) {
                document.getElementById("equals").classList.add("Opaque");
                document.getElementById("equals").classList.remove("Ready");
            }
   
    return "";
  },
  clearExpression: (input) => {
    return "";
  },
  addParenthesesToField: (type) => {
    if (type === "open") {
        for (let operator in operators) {
            if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
                document.getElementById(operators[operator]).classList.add("Opaque");
                document.getElementById(operators[operator]).classList.remove("Ready");
                }
            }
            if (document.getElementById("neg").classList.contains("Opaque")) {
                document.getElementById("neg").classList.remove("Opaque");
                document.getElementById("neg").classList.add("Ready");
                }
            if (!document.getElementById("closed").classList.contains("Opaque")) {
                    document.getElementById("closed").classList.add("Opaque");
                    document.getElementById("closed").classList.remove("Ready");
                    }
                    if (!document.getElementById("^").classList.contains("Opaque")) {
                        document.getElementById("^").classList.add("Opaque");
                        document.getElementById("^").classList.remove("Ready");
                    }
      return "(";
    }
    if (type === "closed") {
      if (
        expression !== "" && !functions.LeftParensMatchRightParens() && 
        (expression.charAt(expression.length - 1) === ")" ||
          expression.charAt(expression.length - 1) === "." ||
          digits.includes(Number(expression.charAt(expression.length - 1))))
      ) {
        for (let operator in operators) {
        if (document.getElementById(operators[operator]).classList.contains("Opaque")) {
            document.getElementById(operators[operator]).classList.remove("Opaque");
            document.getElementById(operators[operator]).classList.add("Ready");
            }
        }
        if (document.getElementById("neg").classList.contains("Opaque")) {
            document.getElementById("neg").classList.remove("Opaque");
            document.getElementById("neg").classList.add("Ready");
            }
            if (document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.remove("Opaque");
                document.getElementById("^").classList.add("Ready");
            }

        
        return ")";
      } else {
        return "";
      }
    }
  },
  addParenthesesToExpression: (type) => {
    if (type === "open") {
        if (!functions.LeftParensMatchRightParens()) {
            if (document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.remove("Opaque");
                document.getElementById("closed").classList.add("Ready");
            }
        }
      if (
        expression !== "" &&
        (expression.charAt(expression.length - 1) === ")" ||
          expression.charAt(expression.length - 1) === "." ||
          digits.includes(Number(expression.charAt(expression.length - 1))))
      ) {
        return "*(";
      } else {
        return "(";
      }
    }
    if (type === "closed") {
      if (
        expression !== "" && !functions.LeftParensMatchRightParens() && 
        (expression.charAt(expression.length - 1) === ")" ||
          expression.charAt(expression.length - 1) === "." ||
          digits.includes(Number(expression.charAt(expression.length - 1))))
      ) {
        return ")";
      } else {
        return "";
      }
    }
  },
  raiseToPowerInField: (carrot) => {
    if (
      expression.charAt(expression.length - 1) === "" ||
      expression.charAt(expression.length - 1) === "(" ||
      operators.includes(expression.charAt(expression.length - 1))
    ) {
      return "";
    } else {
        for (let operator in operators) {
            if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
                document.getElementById(operators[operator]).classList.add("Opaque");
                document.getElementById(operators[operator]).classList.remove("Ready");
                }
            }
        if (document.getElementById("neg").classList.contains("Opaque")) {
                console.log('test');
                document.getElementById("neg").classList.remove("Opaque");
                document.getElementById("neg").classList.add("Ready");
                }
        if (!document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.add("Opaque");
                document.getElementById("closed").classList.remove("Ready");
                }
                if (!document.getElementById("^").classList.contains("Opaque")) {
                    document.getElementById("^").classList.add("Opaque");
                    document.getElementById("^").classList.remove("Ready");
                }
      return carrot;
    }
  },
  raiseToPowerInExpression: (carrot) => {
    if (
      expression.charAt(expression.length - 1) === "" ||
      expression.charAt(expression.length - 1) === "(" ||
      operators.includes(expression.charAt(expression.length - 1))
    ) {
      return "";
    } else {
      return "**";
    }
  },
  addDecimalInField: (decimal) => {
    if (expression.charAt(expression.length - 1) === ".") {
      return "";
    } else {
        for (let operator in operators) {
            if (document.getElementById(operators[operator]).classList.contains("Opaque")) {
                document.getElementById(operators[operator]).classList.remove("Opaque");
                document.getElementById(operators[operator]).classList.add("Ready");
                }
            }
            if (!document.getElementById("neg").classList.contains("Opaque")) {
                document.getElementById("neg").classList.add("Opaque");
                document.getElementById("neg").classList.remove("Ready");
                }
            if (!functions.LeftParensMatchRightParens()) {
                if (document.getElementById("closed").classList.contains("Opaque")) {
                        document.getElementById("closed").classList.remove("Opaque");
                        document.getElementById("closed").classList.add("Ready");
                }
            }
            if (document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.remove("Opaque");
                document.getElementById("^").classList.add("Ready");
            }
      return decimal;
    }
  },
  addDecimalInExpression: (decimal) => {
    if (expression.charAt(expression.length - 1) === ")") {
      return "*" + decimal;
    }
    if (expression.charAt(expression.length - 1) === ".") {
      return "";
    } else {
      return decimal;
    }
  },
  sohcahtoaInField: (trig) => {
    for (let operator in operators) {
        if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
            document.getElementById(operators[operator]).classList.add("Opaque");
            document.getElementById(operators[operator]).classList.remove("Ready");
            }
        }
        if (document.getElementById("neg").classList.contains("Opaque")) {
            console.log('test');
            document.getElementById("neg").classList.remove("Opaque");
            document.getElementById("neg").classList.add("Ready");
            }
        if (!document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.add("Opaque");
                document.getElementById("closed").classList.remove("Ready");
            }
            if (!document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.add("Opaque");
                document.getElementById("^").classList.remove("Ready");
            }
    return trig + "(";
  },
  sohcahtoaInExpression: (trig) => {
    if (
      expression !== "" &&
      (digits.includes(Number(expression.charAt(expression.length - 1))) ||
        expression.charAt(expression.length - 1) === ")" ||
        expression.charAt(expression.length - 1) === ".")
    ) {
    
      return "*" + "Math." + trig + "(";
    } else {
        
      return "Math." + trig + "(";
    }
  },
  logarithmInField: (base) => {
    for (let operator in operators) {
        if (!document.getElementById(operators[operator]).classList.contains("Opaque")) {
            document.getElementById(operators[operator]).classList.add("Opaque");
            document.getElementById(operators[operator]).classList.remove("Ready");
            }
        }
        if (document.getElementById("neg").classList.contains("Opaque")) {
            console.log('test');
            document.getElementById("neg").classList.remove("Opaque");
            document.getElementById("neg").classList.add("Ready");
            }
        if (!document.getElementById("closed").classList.contains("Opaque")) {
                document.getElementById("closed").classList.add("Opaque");
                document.getElementById("closed").classList.remove("Ready");
            }
            if (!document.getElementById("^").classList.contains("Opaque")) {
                document.getElementById("^").classList.add("Opaque");
                document.getElementById("^").classList.remove("Ready");
            }
    if (base === "e") {
      return "ln(";
    }
    if (base === "10") {
      return "log(";
    }
  },
  logarithmInExpression: (base) => {
    if (
      expression !== "" &&
      (digits.includes(Number(expression.charAt(expression.length - 1))) ||
        expression.charAt(expression.length - 1) === ")" ||
        expression.charAt(expression.length - 1) === ".")
    ) {
      if (base === "e") {
        return "*" + "Math.log(";
      }
      if (base === "10") {
        return "*" + "Math.log10(";
      }
    } else {
      if (base === "e") {
        return "Math.log(";
      }
      if (base === "10") {
        return "Math.log10(";
      }
    }
  },
};

const updateField = (field) => {
  document.getElementById("field").innerHTML = field;
};

const calculateValue = () => {
  console.log(expression);
  expression = eval(expression).toString();
  field = expression;
  if (!document.getElementById("equals").classList.contains("Opaque")) {
    document.getElementById("equals").classList.add("Opaque");
    document.getElementById("equals").classList.remove("Ready");
}
  updateField(field);
};

module.exports = functions;
