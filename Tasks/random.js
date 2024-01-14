// Generate random integer value in given range

//Step 4: Added a semicolon at the end of the function declaration to ensure code consistency and prevent potential issues.

const getRandomInt = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = getRandomInt;
