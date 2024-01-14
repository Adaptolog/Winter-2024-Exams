// Find key by value

//Step 2: Fixed rest.pop() argument: The argument passed to rest.pop() was incorrect. We removed the argument to pop the last element from the rest array.

const find = (object, ...rest) => {
  const value = rest.pop();
  const name = [];
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
