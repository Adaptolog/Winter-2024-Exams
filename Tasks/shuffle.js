// Shuffle an array

//Step 5: The code has been formatted using ESLint and Prettier to ensure consistent code style and formatting. All warnings and errors reported by ESLint and Prettier have been fixed.

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

module.exports = shuffle;

