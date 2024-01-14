// Shuffle an array

//Step 2: Instead of using the spread operator to get the array from the input arguments, I can directly destructure the array parameter List to get the arr variable.

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;
