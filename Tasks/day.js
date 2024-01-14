// Get day number

// Step 6: Removed the unnecessary semicolon after the arrow function declaration.

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (daystring) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (daystring.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
}

module.exports = parseDay;
