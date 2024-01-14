// Find key by value

//Step 5: Fixed typeof checks: The typeof checks were not correctly implemented. We added quotes around the string literals and fixed the conditions to check the typeof name and object variables.

const find = (object, ...rest) => {
  const value = rest.pop();
  for (const name in object) {
    if (object[name] === value) {
      if (typeof name === 'string') return name;
      if (typeof object === 'object') return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
