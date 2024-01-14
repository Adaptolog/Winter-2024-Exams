// Get day number

// Step 4: Added a case-insensitive comparison by converting both the input string s and the days in the daysOfWeek array to lowercase using the toLowerCase() method. 
// This ensures that the function can handle input strings with different casing.

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
