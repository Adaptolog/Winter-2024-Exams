// Split an array into two parts

//Step 3: Instead of using the len variable, I slice the array from the index to the end using array.slice(index).

let splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const end = array.slice(index);
  return [begin, end];
};

module.exports = splitArray;
