// Get day number

// Step 3: Used const instead of let for the loop variable i, as it is not modified within the loop.

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (daystring) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (daystring.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
