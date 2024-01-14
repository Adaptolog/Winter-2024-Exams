// Find key by value

//Step 3: Removed empty array: There was an empty array [] in the code, which served no purpose. We removed it to improve code readability.

const find = (object, ...rest) => {
  const value = rest.pop();
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name === 'string') return name;
      if (typeof object === 'object') return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
