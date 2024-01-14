// Get day number

// Step 2: Used const instead of let for the daysOfWeek array, as the array is not modified and its reference remains constant throughout the code.

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (daystring) => {
  let i;
  for (i = 0; i < daysOfWeek.length; i++) {
    if (daystring.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
