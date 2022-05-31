const add0 = (value: number) => (value < 10 ? `0${value}` : value);

export const getSecondTime = (second: number) => {
  const seconds = Math.floor(second % 60);
  const minutes = Math.floor(second / 60);
  const hours = Math.floor(second / 3600);

  if (second < 60) {
    return `${seconds} сек.`;
  }
  if (second < 3600) {
    return `${minutes}:${add0(seconds)} мин.`;
  }
  return `${hours}:${add0(minutes)}:${add0(seconds)} час.`;
};
