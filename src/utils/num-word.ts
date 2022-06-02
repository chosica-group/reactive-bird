/**
 * склонение слова в зависимости от числа
 * @param {number} value
 * @param {string} words[0] - 1 единица
 * @param {string} words[1] - 2 единицы
 * @param {string} words[2] - 5 единиц
 */
export const numWord = (value: number, words: [string, string, string]) => {
  const absValue = Math.abs(value) % 100;
  const num = absValue % 10;

  if (absValue > 10 && absValue < 20) {
    return words[2];
  }
  if (num > 1 && num < 5) {
    return words[1];
  }
  if (num === 1) {
    return words[0];
  }
  return words[2];
};
