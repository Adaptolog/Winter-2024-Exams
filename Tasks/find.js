// Find key by value

//Step 1: Added const keyword: The variables value and name are now declared using the const keyword to ensure they are not reassigned accidentally.

const find = (object, ...rest) => {
  const value = rest.pop();
  const name = [];
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
