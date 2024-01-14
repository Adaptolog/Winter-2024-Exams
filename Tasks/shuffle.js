// Shuffle an array

//Step 1: The function name Shuffle has been changed to shuffle.

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;
