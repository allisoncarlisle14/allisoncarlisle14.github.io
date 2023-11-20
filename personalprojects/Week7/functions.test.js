const functions = require('./functions');


// //enterNumberIntoField

test('returns the number passed to the function', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterNumberIntoField(2)).toBe(2);
  }
});

// enterNumberIntoExpression

test('returns the number passed to the function if the expression does not end with a ")"', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterNumberIntoExpression(2)).toBe(2);
  }
})

test('returns * followed by the number passed to the function if the expression ends with a ")"', () => {
  let arrOfPossibleEndings = [')'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterNumberIntoExpression(2)).toBe('*2');
  }
})

// enterOperatorIntoField

test('returns the operator passed to the function if the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterOperatorIntoField('*')).toBe('*');
  }
})

test('returns an empty string if the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterOperatorIntoField('*')).toBe('');
  }
})

// enterOperatorIntoExpression

test('returns the operator passed to the function if the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterOperatorIntoExpression('*')).toBe('*');
  }
})

test('returns an empty string if the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.enterOperatorIntoExpression('*')).toBe('');
  }
})

// negateValueInField

test('returns - if the expression is  empty or ends with an open parenthesis, a +, a *, or a /', () => {
  let arrOfPossibleEndings = ['', '(', '+', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInField('-')).toBe('-');
  }
})

test('returns *(- if the expression ends with a closed parenthesis', () => {
  let arrOfPossibleEndings = [')'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInField('-')).toBe('*(-');
  }
})

test('returns (- if the expression ends with a minus sign', () => {
  let arrOfPossibleEndings = ['-'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInField('-')).toBe('(-');
  }
})

test('returns an empty string if the expression ends with a decimal or a number', () => {
  let arrOfPossibleEndings = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInField('-')).toBe('');
  }
})

// negateValueInExpression

test('returns - if the expression is  empty or ends with an open parenthesis, a +, a *, or a /', () => {
  let arrOfPossibleEndings = ['', '(', '+', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInExpression('-')).toBe('-');
  }
})

test('returns *(- if the expression ends with a closed parenthesis', () => {
  let arrOfPossibleEndings = [')'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInExpression('-')).toBe('*(-');
  }
})

test('returns (- if the expression ends with a minus sign', () => {
  let arrOfPossibleEndings = ['-'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInExpression('-')).toBe('(-');
  }
})

test('returns an empty string if the expression ends with a decimal or a number', () => {
  let arrOfPossibleEndings = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.negateValueInExpression('-')).toBe('');
  }
})

// insertConstantInField

test('returns E inside parentheses when E is passed to the function', () => {
  expect(functions.insertConstantInField('E')).toBe("(E)");
})

test('returns PI inside parentheses when PI is passed to the function', () => {
  expect(functions.insertConstantInField('PI')).toBe("(PI)");
})

// insertConstantInExpression

test('returns *(Math.constant) if the expression ends with a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.insertConstantInExpression('E')).toBe("*(Math.E)");
  }
})

test('returns (Math.constant) if the expression is empty or ends with an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/',];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.insertConstantInExpression('E')).toBe("(Math.E)");
  }
})

// clearField

test('returns empty string', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.clearField('')).toBe('');
  }
})

// clearExpression

test('returns empty string', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.clearExpression('')).toBe('');
  }
})

// addParenthesesToField

test ('adds open parenthesis when type is open', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addParenthesesToField('open')).toBe('(');
  }
})

test ('adds closed parenthesis when the type is closed and the expression ends with a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
    functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addParenthesesToField('closed')).toBe(')');
  }
})

test ('returns an empty string when the type is closed and the expression is empty or ends with an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
    functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addParenthesesToField('closed')).toBe('');
  }
})



// addParenthesesToExpression

test ('adds * followed by open parenthesis when the type is open and the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addParenthesesToExpression('open')).toBe('*(');
  }
})

test ('adds open parenthesis when the type is open and the expression is empty or ends with an open parenthesis or an operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addParenthesesToExpression('open')).toBe('(');
  }
})

test ('adds closed parenthesis when the type is closed and the expression ends with a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
    functions.setExpressionForTest(arrOfPossibleEndings[i]);
    expect(functions.addParenthesesToExpression('closed')).toBe(')');
  }
})

test ('returns an empty string when the type is closed and the expression is empty or ends with an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
    functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addParenthesesToExpression('closed')).toBe('');
  }
})

// raiseToPowerInField

test ('adds a carrot to field if the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.raiseToPowerInField('^')).toBe('^');
  }
})

test ('returns an empty string if the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.raiseToPowerInField('^')).toBe('');
}
})

// raiseToPowerInExpression

test ('adds ** to the expression if the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.raiseToPowerInExpression('^')).toBe('**');
  }
})

test ('returns an empty string if the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.raiseToPowerInExpression('^')).toBe('');
  }
})

// addDecimalInField

test ('adds a decimal to the field if the expression does NOT end in a decimal', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addDecimalInField('.')).toBe('.');
  }
})

test ('returns an empty string if the expression already ends in a decimal', () => {
  let arrOfPossibleEndings = ['.'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addDecimalInField('.')).toBe('');
  }
})

// addDecimalinExpression

test ('adds a decimal to the expression if the expression does NOT end in a closed parenthesis or decimal', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addDecimalInExpression('.')).toBe('.');
  }
})

test ('adds *decimal to the expression if the expression ends in a closed parenthesis', () => {
  let arrOfPossibleEndings = [')'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addDecimalInExpression('.')).toBe('*.');
  }
})

test ('returns an empty string if expression already ends in a decimal', () => {
  let arrOfPossibleEndings = ['.'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.addDecimalInExpression('.')).toBe('');
  }
})

// sohcahtoaInField

test ('returns trig + open parenthesis', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.sohcahtoaInField('sin')).toBe('sin(');
  }
})

// sohcahtoaInExpression

test ('returns *Math.trig( if the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.sohcahtoaInExpression('sin')).toBe('*Math.sin(');
  }
})


test ('returns Math.trig( if the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.sohcahtoaInExpression('sin')).toBe('Math.sin(');
  }
})

// logarithmInField

test ('returns ln( if base is e', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.logarithmInField('e')).toBe('ln(');
  }
})

test ('returns log( if base is 10', () => {
  let arrOfPossibleEndings = ['', '(', ')', '+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.logarithmInField('10')).toBe('log(');
  }
})

// logarithmInExpression

test ('returns *Math.log( if base is e and the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.logarithmInExpression('e')).toBe('*Math.log(');
  }
})

test ('returns *Math.log10( if base is 10 and the expression ends in a closed parenthesis, a decimal, or a number', () => {
  let arrOfPossibleEndings = [')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.logarithmInExpression('10')).toBe('*Math.log10(');
  }
})


test ('returns Math.log( if base is e and the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.logarithmInExpression('e')).toBe('Math.log(');
  }
})

test ('returns Math.log10( if base is 10 and the expression is empty or ends in an open parenthesis or operator', () => {
  let arrOfPossibleEndings = ['', '(', '+', '-', '*', '/'];
  for (i in arrOfPossibleEndings) {
  functions.setExpressionForTest(arrOfPossibleEndings[i]);
  expect(functions.logarithmInExpression('10')).toBe('Math.log10(');
  }
})





