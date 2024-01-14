// Find key by value

//Step 6: Removed unnecessary code: The line rest.push(5020) was adding a value to the rest array, but it was not used anywhere in the code. We removed this line as it was unnecessary.

const find = (object, ...rest) => {
  const value = rest.pop();
  for (const name in object) {
    if (object[name] === value) {
      if (typeof name === 'string') return name;
      if (typeof object === 'object') return object;
    }
  }
  return undefined;
};

module.exports = find;
