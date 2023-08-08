const getRandomInteger = (min, max) => Math.round(Math.random() * (max - min + 1) + min);
// eslint-disable-next-line max-len
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
export {
  getRandomElement, getRandomFloat, getRandomInteger, getRandomUniqueElements,
};
