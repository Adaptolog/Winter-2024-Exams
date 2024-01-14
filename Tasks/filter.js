// Filter array by type name

//Step 3: Returned the filteredArray as the result of the function.

const filterArrayByType = (array, typeName) => {
  const filteredArray = array.filter((element) => typeof element === typeName);
  return filteredArray;
};

module.exports = filterArrayByType;
