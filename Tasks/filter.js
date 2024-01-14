// Filter array by type name

//Step 2 Used the filter method on the array to create a new array (filteredArray) that contains only the elements of the specified type.
//The filter method takes a callback function that checks the type of each element using the typeof operator.

const filterArrayByType = (array, typeName) => {
  const filteredArray = array.filter((element) => typeof element === typeName);
  return filteredArray;
};

module.exports = filterArrayByType;
