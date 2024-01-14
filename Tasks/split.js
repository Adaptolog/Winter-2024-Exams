// Split an array into two parts

//Step 1: I changed the function name from split_Array to splitArray.

let splitArray = (index, array) => {
  begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = splitArray;
