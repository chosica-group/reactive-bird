export const validateInput = (input, dictionary) => {
  const currentInput = DICT_PATTERNS[input.name];
  const isValidInput = currentInput.regexp.test(input.value);
}
