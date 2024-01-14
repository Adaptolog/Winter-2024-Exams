// Get one random element from an array

//Step 3: Created a new variable randomElement to store the randomly selected element from the array using the randomIndex. This improves code readability and avoids accessing the array twice.

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];
  return randomElement;
};

module.exports = getRandomElement;
