// Get one random element from an array

//Step 2: Created a new variable randomIndex to store the randomly generated index value. This improves code readability and avoids repeating the same calculation multiple times.

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  arr = arr[randomIndex];
  return arr;
};

module.exports = getRandomElement;
