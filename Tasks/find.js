// Find key by value

//Step 4: Added strict equality check: The condition object[name] !== value was checking for inequality using loose equality (!=). We changed it to strict equality (===) to ensure both the value and type are matched.

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
