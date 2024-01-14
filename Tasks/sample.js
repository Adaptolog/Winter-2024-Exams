// Get one random element from an array

//Step 4: Returned the randomElement instead of the arr variable. This ensures that the function returns the desired random element from the array.

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];
  return randomElement;
};

module.exports = getRandomElement;
