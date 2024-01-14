// Generate random integer value in given range

//Step 3: Added a space before and after the arrow function (=>) for better readability.

const getRandomInt = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = getRandomInt;
