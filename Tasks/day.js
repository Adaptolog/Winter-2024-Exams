// Get day number

// Step 1: Renamed the function _parse_day_ to parseDay, Changed variable name D to daysOfWeek.

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
