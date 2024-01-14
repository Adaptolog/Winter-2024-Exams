// Step 7: Use startsWith directly on the lowercase abbreviation.

const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (abbreviation) => {
  const lowercaseAbbreviation = abbreviation.toLowerCase();
  const numberOfMonths = Months.length;

  for (let i = 0; i < numberOfMonths; i++) {
    if (lowercaseAbbreviation.startsWith(Months[i])) {
      return i + 1;
    }
  }

  return -1;
};

module.exports = getMonthNumber;
