// Shuffle an array

//Step 4: The return statement has been moved outside the block to ensure that the shuffled array is always returned.

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

module.exports = shuffle;

