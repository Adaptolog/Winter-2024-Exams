// Split an array into two parts

//Step 2: I added the const keyword to declare the begin and end variables.

let splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const len = array.length;
  const end = array.slice(index, len);
  return [begin, end];
};

module.exports = splitArray;
