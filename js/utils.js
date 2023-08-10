const getRandomInteger = (min, max) => Math.round(Math.random() * (max - min) + min);
const getRandomFloat = (min, max, countNum) => Math.round((Math.random() * (max - min) + min) * 10 ** countNum) / 10 ** countNum;
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomUniqueElements = (array, count) => {
  const result = [];
  while (result.length < count) {
    const value = getRandomElement(array);
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
};
const endNum = (number, words) => number + ' ' + words[(number%100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5)? Math.abs(number) % 10 : 5]];

export {
  getRandomElement, getRandomFloat, getRandomInteger, getRandomUniqueElements, endNum,
};
