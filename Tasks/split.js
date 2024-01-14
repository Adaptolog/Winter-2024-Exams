// Split an array into two parts

//Step 4: I return the begin and end arrays as an array [begin, end] to improve the clarity of the returned values.

let splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const end = array.slice(index);
  return [begin, end];
};

module.exports = splitArray;
