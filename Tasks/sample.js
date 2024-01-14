// Get one random element from an array

//Step 1: Renamed the function from SAMPLE to getRandomElement.

const getRandomElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = getRandomElement;
