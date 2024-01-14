// Generate random integer value in given range

//Step 5: Removed the unnecessary global assignment of Random and directly exported the getRandomInt function using module.exports.

const getRandomInt = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = getRandomInt;
