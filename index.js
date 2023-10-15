let currentInput = '';

const toInput = (value) => {
  currentInput += value;
  document.getElementById('inputField').value = currentInput;
};

const inputClear = () => {
  currentInput = '';
  document.getElementById('inputField').value = currentInput;
};

const add = () => {
  toInput('+');
};

const subtract = () => {
  toInput('-');
};

const multiply = () => {
  toInput('*');
};

const divide = () => {
  toInput('/');
};

const calculate = () => {
  const inputField = document.getElementById('inputField');
  try {
    const result = eval(inputField.value);
    inputField.value = result;
    currentInput = result.toString();
  } catch (error) {
    inputField.value = 'Error';
    currentInput = '';
  }
};

const backspace = () => {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('inputField').value = currentInput;
};
