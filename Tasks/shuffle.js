// Shuffle an array

//Step 3: The unnecessary block {} after the sort function call has been removed. It doesn't serve any purpose and can be safely removed.

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;

