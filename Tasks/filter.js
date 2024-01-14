// Filter array by type name

//Step 1: Renaming the function and parameters to comply with the Camel Case naming convention and to provide a more descriptive name.

const filterArrayByType = (array, typeName) => {
  remove = [];
  for (C of array) {
    x = array.indexOf(C);
    if (typeof array[x] !== typeName) {
      remove.unshift(x);
    }
  }
  for (x of remove) array.splice(x, 1);
  return array;
};

module.exports = filterArrayByType;
