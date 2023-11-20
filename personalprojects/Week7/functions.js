const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "*", "/"];

let expression = "";
let field = "";

const pushButton = (fieldFunc, expressionFunc, input) => {
  if (fieldFunc === functions.clearField) {
    field = "";
    expression = "";
    updateField("Click Buttons To Start");
  } else {
    field += fieldFunc(input);
    expression += expressionFunc(input);
    if (field !== "") {
      updateField(field);
    }
  }
};

const functions = {
  setExpressionForTest: (input) => {
    expression = input;
  },

  enterNumberIntoField: (number) => {
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
    return "(" + constant + ")";
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
    return "";
  },
  clearExpression: (input) => {
    return "";
  },
  addParenthesesToField: (type) => {
    if (type === "open") {
      return "(";
    }
    if (type === "closed") {
      if (
        expression !== "" &&
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
  addParenthesesToExpression: (type) => {
    if (type === "open") {
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
        expression !== "" &&
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
  updateField(field);
};

module.exports = functions;
